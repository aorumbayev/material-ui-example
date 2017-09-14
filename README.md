# Running this example

**Install**:  `> npm install`

**Build**:  `> npm run build` -- required before running app, yes the `run` is necessary. Generates the _bundle.js_ file in the _build_ folder.

**Run**:  open _index.html_ in the _build_ folder to view app, `npm start` currently broken (it's probably supposted to spin up the web server to host the HTML)

## Background & Outside Credit

Based on this example: http://hugosama.com/2016/05/27/react-starting-guide/ but with some modifications:
1. webpack.config.js: replace empty ('') extension with asterick (*) because of error: configuration.resolve.extensions[0] should not be empty
2. webpack.config.js: loaders require the -loader suffix 

Also borrowing snippets from: https://github.com/callemall/material-ui-webpack-example
