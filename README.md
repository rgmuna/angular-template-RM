# AngularJS Template

My personal basic environment setup for making AngularJS web apps. This template includes:
* Basic routing via UI-Router
* Styling via UI-Bootstrap and SASS
* Package management via NPM
* Preprocessing and automatic browser reloading via gulp

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

To get started, all you need is NPM.

### Installing

After cloning the repo, navigate to the directory and run npm install in your command line to install all the dependencies.

```
$ npm install
```

Once the dependencies are installed, start gulp in your command line. This will start a watch on your .scss file and will automatically compile to .css when a change is made and saved. This will also open browsersync and a new browser window which will live reload anytime a change is made and saved in the app folder.

```
$ gulp
```

## Built With

* [AngularJS](https://angularjs.org/) - The web framework used
* [UI-Bootstrap](https://angular-ui.github.io/bootstrap/) - AngularJS-specific bootstrap styling/components
* [UI-Router](https://ui-router.github.io/ng1/) - State routing for AngularJS
* [SASS](https://sass-lang.com/) - CSS preprocessor
* [Gulp](https://gulpjs.com/) - Workflow automation used for processing scss and and automatic browser reloading
* [NPM](https://www.npmjs.com/) - Package manager
