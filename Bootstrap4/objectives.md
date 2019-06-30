# Learn how to use Bootstrap 4

* History of bootstrap 4
    The first release of bootstrap 4, alpha version, was in 2015 and it took 2,5y 
    to its official stable release in Jan 2018.

* What is new?
    Components such as flexbox, cards or classes that deal with margin or padding.
    A new Javascript library has to be included in our file, the Popper.js. 
    This file will deal with the pop ups and dropdowns.

* What is missing?
    Glyphicons have been removed from bootstrap.

`Set up Bootstrap`

    In the head
* 1- <link href="...bootstrap.css">

==============!!!Attention!!!==========================
    We have to put our css file after the bootstrap.css
    Otherwise bootstrap will override it!

    At the bottom of body
    
* 2- <script src= "...jquery.js">
* 3- <script src="...popper.js">
* 4- <script src="...bootstrap.js">

Bootstrap Typograph

* font-size - Global font size increased from 14px to 16px
* 16px is nowadays the browser default
* 1REM (root EM) is equivalent to 16px and it is relative to the root, the top level HTML element

Bootstrap new utilities

* Class to add border
    border, border- top, border- bottom, border- left and border- right

* Class to subtract border 
    border-0, border-top-0, border-bottom-0, border-left-0 and border-right-0

* Class to give a color to a border
    border-warning, border-info, border-success, border-primary, border-secondary, border-dangerous, border-light, border-dark, border-white

* Class to add border-radius
    rounded, rounded-top, rounded-right, rounded-left, rounded-bottom, rounded-circle, rounded-0

Bootstrap spacing
* 0 - 0rem, 1- 0.25rem, 2- 0.5rem, 3- 1rem, 4- 1.5rem, 5-3em

* Margin classes
    ml- margin left, mr- margin right, mt- margin top, mb- margin bottom,
    m- margin, my- margin top and bottom, mx- margin left and right
    (same applies to padding, instead p for padding)

Spacing breakpoint

====== Breakpoint sm, m, l, xl for default bootstrap is set to xs======
 
* padding-{breakpoint}-{size}

Bootstrap Breakpoints

*   Less than 576px -xs devices
    @media(min-width: 576px ){} -small devices
    @media(min-width: 768px ){} -medium devices
    @media(min-width: 992px ){} -large devices
    @media(min-width: 1200px ){} -x-large devices

Bootstrap Navbars

* we have to specify where we want the navbar to expand
    navbar-expand-{breakpoint}

* We have to include the background color ourselves
    .bg-{color} color: info, dark, light, etc

Bootstrap Display Utilities

* Class for display d-{value} for xs
    d-{breakpoint}-{value} for sm, m, l, xl
    
    Value can be:
        none;
        inline;
        inline-block;
        block;
        table;
        table-cell;
        table-row;
        flex;
        inline-flex.

Bootstrap Flexbox 

# To set our elements flex we need to include the class `d-flex` or `d-inline-flex`

* Flexbox is a great utility that was introduced in bootstrap 4 
    It allow us to have more control in the position and the stretching of an element

* Normal flow of an element is left to right and from cross axis top to bottom

* Classes
    justify-content-start(left side by default)
    justify-content-end(right side)
    justify-content-center
    justify-content-around(space around and between the elements)
    justify-content-between(space between elements)

# If we want to reverse the flow we use the class flex-flow-reverse

* Flow inverts in this case from right to left
    justify-content-start(right side by default)
    justify-content-end(left side)
    

# To control the position of the element vertically we use the class `align-items`

* Normal flow top to bottom(bottom to top in flex-row-reverse)
    align-items-start
    align-items-center
    align-items-end
    align-items-baseline
    align-items-stretch(default, it occupies the whole space)

# All properties are responsive 
* Example:
    justify-content-sm-center or align-items-m-end

(For more properties please see bootstrap 4 documentation)

# Bootstrap Grid System (all the breakpoints have been changed) 

* extra small devices < 576px
    .col- (by default)

* small devices < 768px
    .col-sm-

* medium devices < 992px
    .col-m- 

* large devices < 1200px
    col-l-

* extra large devices >= 1200px
    col-xl-

# Attention!!!! It has to be inside a div container or container-fluid, then inside a div row

* If we want different divs to have the same space, we don't need to set a width
* all we need is to put the class `col` in all of them and automatically will share the space








    




























