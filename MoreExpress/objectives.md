# Rending HTML and Templates

* Use res.render() to render HTML (from an EJS file)
    EJS stands for embedded javascript
    

* Explain what EJS is and why we use it
    It's what enable us to have dynamic templates. 
    EJS let us embed javascript code, variables, if statements, loops
    inside HTML

* Pass variables to EJS templates
    In our .js file we pass the variables
    by adding an object {} in the render. 
    Example: res.render("filename.ejs", {variableToPass:value})
    Then we use it by adding <%= variableToPass %> in our ejs file.

# EJS Control Flow

* Examples of control flow in EJS templates
    If statements
    For Loop and For Each

* Difference between `<%= %>` and `<% %>` in EJS
    We use `<%= %>` when we want to add something to the html file
    And  `<% %>` when we don't want, for instance an if statement or a loop
    `<%= %>` - evaluates and shows what it is between 
    `<% %>`- hides everything between

# Styles and Partials

* Show how to properly include public assets
    app.use(express.static("public")); - To connect to css files and others
    

* Properly configure our app to use EJS
    app.set("view engine", "ejs");

* Use Partials to dry up our code
    mkdir views/partials
    
    <% include partials/header %> -
        touch views/partials/header.ejs
    <% include partials/footer %> - 
        touch views/partials/footer.ejs

# Post Requests!!!

* Write post routes, and test them with Postman
* Use a form to send a post request
* Use body parser to get form data
    npm install body-parser --save







