# WordPress Gulp Template with Browsersync.
A WordPress theme set up with gulp, using browsersync. This works with websites set up locally with MAMP.

The purpose of this theme is so you can easily set up a custom WordPress theme that will use browsersync for easy local development.

The project includes:

- BrowserSync - this will reload your browser whenever you save your project, making it easy to see changes quickly
- Auto-prefixer - adds prefixes for windows, moz and webkit in CSS.
- Minify - will compress your Sass and JS

# Starting the project

Install WordPress locally, and add this as a custom theme i.e. your-project-name/wp-content/themes/custom-theme-name, and either use the built in Terminal with your code programme (I use PhpStorm), or open Terminal and navigate to the project:

``cd path/to/your-project-name/wp-content/themes/custom-theme-name``

Then install the node modules:

``npm install``

If you're using MAMP, you'll need to set up your project there first, then you will need to set the proxy in *gulpfile.js* (line 26).

Once that's done and you've installed the node_modules, you need to run gulp, in Terminal simply type:

``gulp``

This will run the project, and should open the project in a browser under http://localhost:3000 - you can configure the port number and anything else you need in the *gulpfile.js*

The gulpfile has a watch task which means every time you update a php, sass, image, or js file it will instantly re-run the gulp task and reload the project in the browser.

# Sass set up

I'm using Sass for this project, and I've included some tools that might be helpful

- Using an ITCSS methodology, you should create new components in the sass/components folder, and any basic/global use elements in the sass/elements 
- A responsive, accessible mobile menu, using simple jQuery.
- A simple jQuery accordion.
- Some variables are pre-set up in _variables.scss, _colors.scss and _typography.scss to get you going.
- Object-fit-images is included, instructions on this are here: https://github.com/fregante/object-fit-images 
- I've included a media queries plugin, making it easy to write custom media queries i.e. `@include max-screen(768px)` More info on this here http://github.com/paranoida/sass-mediaqueries 
