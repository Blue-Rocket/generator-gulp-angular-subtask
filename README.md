# generator-gulp-angular-subtask [![Build Status](https://secure.travis-ci.org/doronsever/generator-gulp-angular-subtask.png?branch=master)](https://travis-ci.org/doronsever/generator-gulp-angular-subtask)

> A helper generator for [gulp-angular](https://github.com/Swiip/generator-gulp-angular) generator


## Getting Started

### Installation


```
npm install -g generator-gulp-angular-subtask
```

### Why should i use it?

For the time been, this great generator does not support sub tasks like controllers and directives. <br>
So i built a helper generator that creates those tasks for me and thuoght about sharing.

This project will be deprecated when the team decide to support this issue. 

### Usage:

Currently i support these sub tasks: 

  * controller
  
### options

To see the options you can always use the help opton on a task

```
yo gulp-angular-subtask:controller --help
```

**These are the options available**

  * --dest : Set a destination where to save the file
  * --component : Set the destination to be under the component library
  * --coffee : Generate coffeescript template instead of regular javascript
  
Please note that for the time been, gulp-angular does not support coffescript. I'm using my IDEA's file watcher to generate a corresponding js file.  

## Examples

* To Create a controller <br />
  ```
  yo gulp-angular-subtask:controller user
  ```<br /><br />
  Produces <br />
> src/app/user/controllers/user-controller.js

* Creating a controller under the components library <br />
  ```
  yo gulp-angular-subtask:controller navbar --component
  ``` <br /><br />
  Produces 
>src/components/navbar/controllers/navbar-controller.js

* Creating a controller under user specific library <br />
  ```
  yo gulp-angular-subtask:controller user --dest="specific/location"
  ``` <br /><br />
  Produces 
>src/specific/location/controllers/navbar-controller.js

* Creating a coffee script controller <br />
  ```
  yo gulp-angular-subtask:controller user --coffee
  ``` <br /><br />
  Produces 
>src/app/user/controllers/user-controller.coffee


## License

MIT