# 1. how to create strem
`````
// 1. using Stream.of(val1, val2,….)
Stream<String> stream1 = Stream.of("Iron Man", "Rajinikanth", "Katara");
stream1.forEach(item -> System.out.println(item));

// 2. using List.stream()
List<String> list = Arrays.asList("Iron Man", "Rajinikanth", "Katara");
Stream<String> stream2 = list.stream();
stream2.forEach(item -> System.out.println(item));

// 3. using Stream.of(arrayOfElements)
Stream<String> stream3 = Stream.of( new String[]{"Iron Man", "Rajinikanth", "Katara"} );
stream3.forEach(item -> System.out.println(item));

// 4. using String chars or String tokens
IntStream stream4 = "1_k".chars();
stream4.forEach(item -> System.out.println(item));

Stream<String> stream5 = Stream.of("A,B,C".split(","));
stream5.forEach(item -> System.out.println(item));
`````
# 2. Stream Operations
```
//Stream.map()
numbers.stream()
       .filter(s -> s.length() > 3)
       .map(String::toUpperCase)
       .forEach(System.out::println);

//Stream.sorted()
numbers.stream()
        .sorted()
        .filter(s -> s.length() > 3)
        .map(String::toUpperCase)
        .forEach(System.out::println);

// Stream.collect()
List<String> stringsAsUppercaseList = numbers.stream()
        .map(value -> value.toUpperCase())
        .collect(Collectors.toList());

System.out.println(stringsAsUppercaseList);

//Stream.match()
boolean result = numbers.stream()
        .anyMatch((s) -> s.length() > 3);

System.out.println(result);

result = numbers.stream()
        .allMatch((s) -> s.length() > 3);

System.out.println(result);

result = numbers.stream()
        .noneMatch((s) -> s.length() > 3);

System.out.println(result);
```

# 3. flatmap
```
package ca.on.gov.mccss.bil.security;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import org.springframework.boot.configurationprocessor.json.JSONArray;
import org.springframework.boot.configurationprocessor.json.JSONObject;

public class KellyStreamTest {

    static List<JSONObject> pickResources2 (JSONObject InpJson) {
        List<JSONObject> records = new ArrayList<>();
        JSONArray rootArray = InpJson.getJSONArray("root");
        toStream(rootArray)
                .forEach(record -> {
                            JSONArray Resources = record.getJSONArray("Resources");
                            String id = record.getString("id");
                            toStream(Resources)
                                    .filter(resource -> ! resource.getString("name").equals("Credit"))
                                    .map(resource -> resource.put("id", id))
                                    .forEach(records::add);
                        }
                );
        return records;
    }
    
    static Stream<JSONObject> toStream(JSONArray arr) {
            return StreamSupport.stream(arr.spliterator(), false) // false => not parallel stream
                    .map(JSONObject.class::cast);
    }    

    static List<JSONObject> pickResources3 (JSONObject InpJson) {
        return toStream(InpJson.getJSONArray("root"))
                .flatMap(record -> toStream(record.getJSONArray("Resources"))
                        .filter(resource -> ! resource.getString("name").equals("Credit"))
                        .map(resource -> resource.put("id", record.getString("id"))))
                .collect(Collectors.toList());
    }    
}

```