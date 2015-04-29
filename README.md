# generator-mvc6-angular [![Build Status](https://secure.travis-ci.org/dolanmiu/generator-mvc6-angular.png?branch=master)](https://travis-ci.org/dolanmiu/generator-mvc6-angular)

> [Yeoman](http://yeoman.io) generator

Sorry everyone who has downloaded this recently, I was just testing publishing it to npm (my first npm release), so there are some issues! I will releasing very frequent updates!

**Note: You need to have Visual Studio 2015 installed. It is currently in Preview and is [free here](https://www.visualstudio.com/en-us/downloads/visual-studio-2015-downloads-vs.aspx). [Visual Studio 2013 does not support MVC 6](http://stackoverflow.com/questions/24259598/is-it-possible-to-use-asp-net-mvc-6-in-visual-studio-2013), unless you find a way to open [vNext .kpoj](http://stackoverflow.com/questions/27004639/cant-open-kproj-projects-in-vs-net-2013-update-4) files.**

# Getting Started
```bash
npm install -g yo
```

To install generator-mvc6-angular from npm, run:

```bash
npm install -g generator-mvc6-angular
```

Initiate the generator:

```bash
yo mvc6-angular
```

Follow the instructions on the generator. It will prompt you for the name of the app.

The Visual Studio 2015 project is located in: `\src\[PROJECT NAME]\[PROJECT NAME].kproj`. When you first exit the project, it will try to create the other nessesary Visual Studio files, including the Solution (`.sln`) file. It is recommended for tidyness to save the `.sln` file in the root (same path as the `.gitignore`). This is because Visual Studio will create other user preferance meta-data (`.suo` files) not related to the source of the app. 

# Running
**Note: A grunt watch will be made in the future so you wouldn't need to build everytime**

1. To build, you run, you must go to the Task Runner Explorer, and run the `build` task. This will build the angular front-end into the `wwwroot` folder.

 ![](http://i62.tinypic.com/n4yyc9.png)

2. Then press the start button

 ![](http://i57.tinypic.com/2rhmbt1.png)

# Creating the client

As you know, the client is made with Angular, and its all in the `Client` folder. `app.js` is the main file which declares your app's namespace, and the rest of the Angular app is inside the `App` folder. 

Inside the `App` folder, you get the `Components` folder, which stores the components of the app, and the rest of the different pages. You are provided with a default `Main` folder, which is the main page you see when you start the app.

By default, the generator uses superior `ui.router`, to add more routes, edit the `app.js` file. I will add options for future releases though.

## Directory structure

Here is the directory structure for the `Client` folder:


    ├── Client
    │   ├── App                 - All of our app specific components go in here
    |   |   ├── Components      - Our reusable components, non-specific to to our app
    │   |   ├── Main            - Specific app component
    │   |   └ app.js            - Main AngularJS file which wires angular dependancies.
    │   ├── Assets              - Custom assets: fonts, images, etc…
    │   └── index.html          - App main page (ng-app lives here)
    │

## Building the client
As mentioned above, for your changes to show on the browser, you must build the client using [Grunt](http://gruntjs.com) by using the `Task Runner Explorer`. The build script contains uglifying, concating and js and sass files.

If you are fancy, you can set up automatic building upon Starting the app by adding a `binding`:

![](http://i59.tinypic.com/33vbxc7.png)

# Sub-generators
## Front-end
### Page
Generates a folder containing a controller, a HTML view and a route to allow access to `http://localhost/[YOUR PAGE]`

Example:
```bash
yo mvc6-angular:page Portfolio
```
Produces:

    src/[APP NAME]/Client/App/portfolio/portfolio.html
    src/[APP NAME]/Client/App/portfolio/portfolio.controller.js
    src/[APP NAME]/Client/App/portfolio/routes.js

## Back-end
### Endpoint
Generates a new API endpoint.


Example:
```bash
yo mvc6-angular:endpoint Messages
```

Produces:

    src/[APP NAME]/Server/API/MessagesController.cs
    
### Visual Studio Equivalent 
We recommend you to make a RESTful service to communicate with the Angular Client to a nice and clean separation of concern:

1. To do so, right click a folder, and select `Add > New Item`:

 ![](http://i61.tinypic.com/27yvnso.png)

2. Select `Web API Controller Class` to generate a RESTful API template. 

 ![](http://i59.tinypic.com/2zhpnpj.png)


# Features

* Bootstrap
* Angular
* Grunt - ASP.NET MVC6 has the Task Runner Explorer which has built in [Grunt](http://gruntjs.com) support!
* Bower, NPM and NuGet - Built in support for these three repositories! To install new dependencies, `right click > restore`
 
 ![](http://i60.tinypic.com/rau9li.png)
* jit-grunt for increased build speed
* No More Web Forms
* No More Visual Basic
* Tag Helpers
* Edit while running the solution like Classic ASP editing
* ASP.NET Dependency Injection Framework

# License

(The MIT License)

Copyright (c) Dolan Miu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.