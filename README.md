# php-gulp-template
A gulp set up, with a PHP server and browsersync.

The purpose of this project is so you can easily set up a quick project to build in PHP. I use this to build my front end before integrating into WordPress. 

The project includes:

- BrowserSync - this will reload your browser whenever you save your project, making it easy to see changes quickly
- Auto-prefixer - adds prefixes for windows, moz and webkit in CSS.
- Minify - will compress your Sass and JS
- gulp-connect-php - runs a local php server in connection with BrowserSync

# Starting the project

Open in your code program, and either use the built in Terminal, or open Terminal and navigate to the project:

``cd path/to/your-project-name``

Then install the node modules:

``npm install``

Once that has installed, run gulp, simply type:

``gulp``

This will run the project, and should open the project in a browser under http://localhost:3000 - you can configure the port number and anything else you need in the *gulpfile.js*

The gulpfile has a watch task which means every time you update a php, sass, image, or js file it will instantly re-run the gulp task and reload the project in the browser.

# Running with WordPress

This is just how I personally work, but once I've created all the necessary files and I'm ready to integrate with WordPress, I can then package all these files into it's own theme folder (including all the gulp files, etc) i.e. my-gulp-project.

I can then install WordPress locally, and put my new theme folder into the themes directory. I.e. /wp-content/themes/my-gulp-project

Once this is done, I'll need to re-configure my gulpfile.js.

I use MAMP Pro to run my local server, so once I've set that up and have a database with WordPress installed, I can keep using my gulp setup with BrowserSync by doing the following:

Change this:

`` proxy:"localhost:5000",``

To:

``proxy:"http://myproject.test",``

https://myproject.test being whatever the address is you've given your project in MAMP.

Re-run gulp and it should load WordPress so you can configure your set up!

# Sass set up

I'm using Sass for this project, and I've included some tools that might be helpful

- Using an ITCSS methodology, you should create new components in the sass/components folder, and any basic/global use elements in the sass/elements 
- A responsive, accessible mobile menu, using simple jQuery.
- Some variables in _variables.scss, _colors.scss and _typography.scss to get you going
- I've included a media queries plugin, making it easy to write custom media queries i.e. `@include max-screen(768px)`
