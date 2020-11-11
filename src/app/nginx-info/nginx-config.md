# 1. nginx configuration link
https://www.digitalocean.com/community/tutorials/understanding-nginx-server-and-location-block-selection-algorithms#nginx-block-configurations

https://www.nginx.com/

https://www.nginx.com/resources/wiki/start/topics/examples/full/

# 2. how to configuration server location in nginx
Location Block Syntax
Before we cover how Nginx decides which location block to use to handle requests, let’s go over some of the syntax you might see in location block definitions. Location blocks live within server blocks (or other location blocks) and are used to decide how to process the request URI (the part of the request that comes after the domain name or IP address/port).

Location blocks generally take the following form:

```
location optional_modifier location_match {

    . . .

}
```
The location_match in the above defines what Nginx should check the request URI against. The existence or nonexistence of the modifier in the above example affects the way that the Nginx attempts to match the location block. The modifiers below will cause the associated location block to be interpreted as follows:

(none): If no modifiers are present, the location is interpreted as a prefix match. This means that the location given will be matched against the beginning of the request URI to determine a match.
=: If an equal sign is used, this block will be considered a match if the request URI exactly matches the location given.
~: If a tilde modifier is present, this location will be interpreted as a case-sensitive regular expression match.
~*: If a tilde and asterisk modifier is used, the location block will be interpreted as a case-insensitive regular expression match.
^~: If a carat and tilde modifier is present, and if this block is selected as the best non-regular expression match, regular expression matching will not take place.

examples:
As an example of prefix matching, the following location block may be selected to respond for request URIs that look like /site, /site/page1/index.html, or /site/index.html:
```
location /site {

    . . .

}
```
For a demonstration of exact request URI matching, this block will always be used to respond to a request URI that looks like /page1. It will not be used to respond to a /page1/index.html request URI. Keep in mind that if this block is selected and the request is fulfilled using an index page, an internal redirect will take place to another location that will be the actual handler of the request:
```
location = /page1 {

    . . .

}
```
As an example of a location that should be interpreted as a case-sensitive regular expression, this block could be used to handle requests for /tortoise.jpg, but not for /FLOWER.PNG:
```
location ~ \.(jpe?g|png|gif|ico)$ {

    . . .

}
```
A block that would allow for case-insensitive matching similar to the above is shown below. Here, both /tortoise.jpg and /FLOWER.PNG could be handled by this block:
```
location ~* \.(jpe?g|png|gif|ico)$ {

    . . .

}
```
Finally, this block would prevent regular expression matching from occurring if it is determined to be the best non-regular expression match. It could handle requests for /costumes/ninja.html:
```
location ^~ /costumes {

    . . .

}
```

```
example:
  server
  {
    listen                        {{port}} ;
    root                          /home/vcap/app/public ;

    location /
    {
      try_files                   $uri $uri/ /index.html ;
    }

    location /fallback {
        root /var/www/another;
    }    
  }

```

In the above example, if a request is made for /blahblah, the first location will initially get the request. It will try to find a file called blahblah in /var/www/main directory. If it cannot find one, it will follow up by searching for a file called blahblah.html. It will then try to see if there is a directory called blahblah/ within the /var/www/main directory. Failing all of these attempts, it will redirect to /fallback/index.html. This will trigger another location search that will be caught by the second location block. This will serve the file /var/www/another/fallback/index.html.

Another directive that can lead to a location block pass off is the rewrite directive. When using the last parameter with the rewrite directive, or when using no parameter at all, Nginx will search for a new matching location based on the results of the rewrite.

