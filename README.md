**Install**:  `> npm install`

**Build**:  `> npm run build` -- required before running app, yes the `run` is necessary. Generated the bundle.js file in the build folder.

**Run**:  open index.html to view app, `npm start` currently broken

Based on this example: http://hugosama.com/2016/05/27/react-starting-guide/ but with some modifications:
1. webpack.config.js: replace empty ('') extension with asterick (*) because of error: configuration.resolve.extensions[0] should not be empty
2. webpack.config.js: loaders require the -loader suffix 
