# The most important difference between a library and a framework is 
`inversion of Control`.

* What is a framework? 
    
* How is it different from a library?
    When you call a library, you are in control. 
    However, in the framework, the control is inverted and calls you instead.
    The framework calls you by giving you a bunch of predefined white spots
    that you can fill out with your code.

`https://stackoverflow.com/questions/3057526/framework-vs-toolkit-vs-library`
* What is Express?
    It is a web developer framework.

* Why are we using Express?
    It is the most popular node framework, there are a lot of tutorials and a big community.
    It is a very light weight framework, so we have more white spots to fill out and that helps us to understand 
    how it works and what we are doing.

===============================================

# NPM init and Package.json

* use the `--save` flag to install packages
    It will add the dependency to the Packages.json file.

* Explain what the package.json file does
    Packages.json file contains metadata relevant to a specific project.
    You can also find the explanation on `docs.nodejitsu.com`.
    json stands for javascript object notation
    It is a data type, a way of formating text in a file to represent structure.
* Use `npm init` to create a new package.json 

# Automate Node Server Restart

* Use Nodemon to automate the restarting of the node server
    npm i -g nodemon, i stands for install and g for global.
* How to use it?
    Run `nodemon` enter

================================================

* Understand the `"*"` route 
    The `"*"` allows us to show a message everytime that a route, that hasn't been created, is typed.
    Example: 

* Discuss route order
    The order of the routes matters and we should always put the "*" route at the bottom!!!
    If we fail to do it, none of the routes under "*" route will be triggered.




















