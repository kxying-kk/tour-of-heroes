# 1. BehaviorSubject vs observable

BehaviorSubject is a type of subject, a subject is a special type of observable so you can subscribe to messages like any other observable. The unique features of BehaviorSubject are:

It needs an initial value as it must always return a value on subscription even if it hasn't received a next()
Upon subscription, it returns the last value of the subject. A regular observable only triggers when it receives an onnext
at any point, you can retrieve the last value of the subject in a non-observable code using the getValue() method.
Unique features of a subject compared to an observable are:

It is an observer in addition to being an observable so you can also send values to a subject in addition to subscribing to it.
In addition, you can get an observable from behavior subject using the asObservable() method on BehaviorSubject.

Observable is a Generic, and BehaviorSubject is technically a sub-type of Observable because BehaviorSubject is an observable with specific qualities.

Example with BehaviorSubject:
```
// Behavior Subject

// a is an initial value. if there is a subscription 
// after this, it would get "a" value immediately
let bSubject = new BehaviorSubject("a"); 

bSubject.next("b");

bSubject.subscribe(value => {
  console.log("Subscription got", value); // Subscription got b, 
                                          // ^ This would not happen 
                                          // for a generic observable 
                                          // or generic subject by default
});

bSubject.next("c"); // Subscription got c
bSubject.next("d"); // Subscription got d
Example 2 with regular subject:
```
```
// Regular Subject

let subject = new Subject(); 

subject.next("b");

subject.subscribe(value => {
  console.log("Subscription got", value); // Subscription wont get 
                                          // anything at this point
});

subject.next("c"); // Subscription got c
subject.next("d"); // Subscription got d
An observable can be created from both Subject and BehaviorSubject using subject.asObservable().
```

The only difference being you can't send values to an observable using next() method.

In Angular services, I would use BehaviorSubject for a data service as an angular service often initializes before component and behavior subject ensures that the component consuming the service receives the last updated data even if there are no new updates since the component's subscription to this data.