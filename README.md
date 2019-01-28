# Overview

This is a Frontend UI intended for use with a machine learning image recognition/classification backend. The goal is to allow users to upload images to be classified/tagged (with adjustable sensitivity settings) and to display the results in an interactive environment where corrections can be made to tags and notes can be added. 

##### Note:
There is currently no publically available backend for use with this App. This github repo only contains the frontend code.

## TODO

- [x] Implement image upload/render capabilities.
- [x] Implement Konva and shape-drawing on canvas.
- [ ] Implement drawn box display/interface inside image render menu.
- [ ] Implement multiple file uploading capability and drag/drop functionality.
- [ ] Implement canvas features: click-and-drag, zoom.
- [ ] Impement console with relevant logging of request statuses and classification information.
- [ ] Implement Redux, write tests for reducers.
- [ ] Create mock Express server for testing requests.
- [ ] Create boilerplate machine learning backend for users to train and use for classifying.

## Installation

0. **See Initial Machine Setup below if you don't have node or git installed, or if you're experiencing issues during the Get Started phase**

1.  **Clone the project**

    `git clone https://github.com/Dynatos/Canvas-Photo-Viewer.git`.

2. **Install node dependencies (make sure you're inside the folder with the `'package.json'` file).**

    `npm install`

3. **Run the app**

    `npm start -s`

    This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. 
    
    Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.


## Initial Machine Setup

1. **Install [Node 4.0.0 or greater](https://nodejs.org)**

    (5.0 or greater is recommended for optimal build performance)
    Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).

2. **Install [Git](https://git-scm.com/downloads)**.

3. **[Disable safe write in your editor](https://webpack.js.org/guides/development/#adjusting-your-text-editor)** to assure hot reloading works properly.

4. Complete the steps below for your operating system:

    ### macOS

    * Install [watchman](https://facebook.github.io/watchman/) via `brew install watchman` or fswatch via `brew install fswatch` to avoid [this issue](https://github.com/facebook/create-react-app/issues/871) which occurs if your macOS has no appropriate file watching service installed.

    ### Linux

    * Run this to [increase the limit](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) on the number of files Linux will watch. [Here's why](https://github.com/coryhouse/react-slingshot/issues/6).

        `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`.

    ### Windows
    
    * **Install [Python 2.7](https://www.python.org/downloads/)**. Some node modules may rely on node-gyp, which requires Python on Windows.
    * **Install C++ Compiler**. Browser-sync requires a C++ compiler on Windows.
    
      [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler.
      
      If you already have Visual Studio installed:
      Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop.
      The C++ compiler is used to compile browser-sync (and perhaps other Node modules).



## Having Issues? Try these things first

1. Make sure you ran all steps in [Get started](#get-started) including the [initial machine setup](#initial-machine-setup).
2. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
3. Install the latest version of Node. Or install [Node 5.12.0](https://nodejs.org/download/release/v5.12.0/) if you're having issues on Windows. Node 6 has issues on some Windows machines.
4. Make sure files with names that begin with a dot (.editorconfig, .gitignore, .npmrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
5. Don't run the project from a symbolic link. It may cause issues with file watches.
6. Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in this project.
7. Make sure you don't have NODE_ENV set to production on your machine. If you do then the [development dependencies won't be installed](https://github.com/coryhouse/react-slingshot/issues/400#issuecomment-290497767). Here's [how to check](http://stackoverflow.com/a/27939821/26180).
8. Install watchman with `brew install watchman` if you are having the following error after an initial `npm start -s`:

    ```bash
    2017-09-05 00:44 node[68587] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
    2017-09-05 00:44 node[68587] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
    events.js:160
          throw er; // Unhandled 'error' event
          ^

    Error: Error watching file for changes: EMFILE
        at exports._errnoException (util.js:1022:11)
        at FSEvent.FSWatcher._handle.onchange (fs.js:1406:11)
    ```

9. Tip: Things to check if you get an `npm run lint` error or build error:

    * If ESW found an error or warning in your project (e.g. console statement or a missing semi-colon), the lint thread will exit with `Exit status 1`. To fix:

      1. Change the `npm run lint` script to `"esw webpack.config.* src tools; exit 0"`
      1. Change the `npm run lint:watch` script to `"esw webpack.config.* src tools --watch; exit 0"`

      > Note: Adding `exit 0` will allow the npm scripts to ignore the status 1 and allow ESW to print all warnings and errors.
    * Ensure the `eslint`/`esw` globally installed version matches the version used in the project. This will ensure the `esw` keyword is resolved.

10. Rebuild node-sass with `npm rebuild node-sass` if you are having and error like `Node Sass does not yet support your current environment on macOS XXX` after an initial `npm start -s`.



## Technologies

This app is built on top of the React slingshot boilerplate (https://github.com/coryhouse/react-slingshot) and includes the following technologies:


| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)              | Fast, composable client-side components.                                                                                                                                                          | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)
|  [Redux](http://redux.js.org)                            | Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux), [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux), [Pluralsight Course](http://www.pluralsight.com/courses/react-redux-react-router-es6)
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React                                                                                                                                                              | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)
|  [Babel](http://babeljs.io)                              | Compiles ES6 to ES5. Enjoy the new version of JavaScript today.                                                                                                                                   | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)
| [Webpack](https://webpack.js.org)                        | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr).                                          | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)
| [Browsersync](https://www.browsersync.io/)               | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices.                                                                                         | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ)
| [Jest](https://facebook.github.io/jest/)                 | Automated tests with built-in expect assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node.                                                      | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript)
| [TrackJS](https://trackjs.com/)                          | JavaScript error tracking.                                                                                                                                                                        | [Free trial](https://my.trackjs.com/signup)
| [ESLint](http://eslint.org/)                             | Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules.                              |
| [SASS](http://sass-lang.com/)                            | Compiled CSS styles with variables, functions, and more.                                                                                                                                          | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)
| [PostCSS](https://github.com/postcss/postcss)            | Transform styles with JS plugins. Used to autoprefix CSS                                                                                                                                          |
| [Editor Config](http://editorconfig.org)                 | Enforce consistent editor settings (spaces vs tabs, etc).                                                                                                                                         | [IDE Plugins](http://editorconfig.org/#download)
| [npm Scripts](https://docs.npmjs.com/misc/scripts)       | Glues all this together in a handy automated build.                                                                                                                                               | [Pluralsight course](https://www.pluralsight.com/courses/npm-build-tool-introduction), [Why not Gulp?](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n)
