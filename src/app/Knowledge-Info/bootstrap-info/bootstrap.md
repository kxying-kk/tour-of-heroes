# 1. official site
https://getbootstrap.com/docs/4.0/getting-started/introduction/

# 2. about bootstrap
Bootstrap is an open-source, intuitive, and powerful framework used for responsive mobile-first solutions on the web. For several years, Bootstrap has helped developers create splendid mobile-ready front-end websites. In fact, Bootstrap is the most popular  CSS framework as it’s easy to learn and offers a consistent design by using re-usable components.
## Pros
High speed of development
Bootstrap is mobile first
Enjoys  a strong community support
## Cons
All Bootstrap sites look the same
Bootstrap sites can be heavy
May not be suitable for simple websites

In such cases, Bootstrap alternatives, namely Foundation, Skeleton, Pure, and Semantic UI adaptable and lightweight frameworks that can meet your developmental needs and improve your site’s user-friendliness.

# 3. Material Design
Material Design supports Angular Material and React Material User Interface
Material design with Angular has some benefits as it is an angular
## pros
Is compatible across various browsers
Doesn’t require JavaScript frameworks
## Cons
The animations and vibrant colors can be distracting
It is affiliated to Google
Carries performance overhead


# 4. Bootstrap vs Material Design
Both Bootstrap vs Material Design have a sound browser compatibility as they are compatible across most browsers. 
Bootstrap completely depends on JavaScript frameworks

Bootstrap is great for responsive, simple, and professional websites. It enjoys immense support and documentation, making it easy for developers to work with it. So, if you are working on a project that needs to be completed within a short time, opt for Bootstrap. The framework is mainly focused on creating responsive, functional, and high-quality websites and apps that enhance the user experience.

# How to use bootstrap in angular
https://medium.com/codingthesmartway-com-blog/using-bootstrap-with-angular-c83c3cee3f4a#:~:text=Bootstrap%20is%20the%20most%20popular,%2C%20mobile%2Dfirst%20web%20sites.&text=Furthermore%20we'll%20take%20a,used%20out%20of%20the%20box.

```
npm install -g @angular/cli
```

## Step 1: create an angular project
```
ng new bootstrap-project
ng serve
```

## Step 2: Installing Bootstrap 4 in Your Angular 10 Project
```
npm install bootstrap
```
This will also add the bootstrap package to package.json

You also need to install JQuery
```
npm install jquery
```

## Step 3 (method 1):  Adding Bootstrap 4 to Angular 10 Using angular.json
node_modules/bootstrap/dist/css/bootstrap.css in the projects->architect->build->styles array,
node_modules/bootstrap/dist/js/bootstrap.js in the projects->architect->build->scripts array,
node_modules/bootstrap/dist/js/bootstrap.js in the projects->architect->build->scripts array,

## Step 3 (Method 2): Adding Bootstrap 4 to Angular 10 Using index.html
Open the src/index.html file and add the following tags:

A <link> tag for adding the bootstrap.css file in the <head> section,
A <script> tag for adding the jquery.js file before the closing </body> tag,
A <script> tag for adding the bootstrap.js file before the </body> tag.
```
<!doctype html><html lang="en">
<head>  
<meta charset="utf-8">  
<title>Angular Bootstrap 4 Examples</title>  <base href="/">  
<meta name="viewport" content="width=device-width, initial-scale=1">  
<link rel="icon" type="image/x-icon" href="favicon.ico">  
<link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
</head>
<body>  
<app-root></app-root>  
<script src="../node_modules/jquery/dist/jquery.js"></script>  <script src="../node_modules/bootstrap/dist/js/bootstrap.js"></script>    
</body>
</html>
```


## Step 3 (method 3): Adding Bootstrap 4 Using ng-bootstrap and ngx-bootstrap

Ng-Bootstrap is available as a NPM package, so the installation can be done by using the following command in the project directory
```
$ npm install @ng-bootstrap/ng-bootstrap
```

# Adding Bootstrap 4 to Angular 10 Using Schematics
```
ng add @ng-bootstrap/schematics
```
