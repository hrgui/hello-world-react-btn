# @hrgui/hello-world-react-btn
This is just a sample of how to compile a library that works with create-react-app / storybook.

# dependencies explanation
```
"@babel/cli": "^7.4.3", <-- for the babel binary
"@babel/core": "^7.4.3", <-- for the babel core
"@babel/runtime": "^7.4.3", <-- for the babel runtime polyfill (may not be needed)
"@material-ui/core": "^3.9.3", <-- example of importing material-ui
"babel-preset-react-app": "^7.0.2", <-- the preset that we are using
"cross-env": "^5.2.0", <-- for work w/ other apps
"react": "^16.8.6", <-- may be peer dep
"react-dom": "^16.8.6" <-- may be peer dep
```

# the build step
```
NODE_ENV=production babel ./src --out-dir ./lib --ignore \"**/*.test.js\" --copy-files
```
- `--copy-files` to copy other assets

# the start step
```
NODE_ENV=production babel ./src --out-dir ./lib --ignore \"**/*.test.js\" --copy-files --watch
```
- `--watch` to watch the files


# FAQ

## why doesnt this do rollup?
- too lazy to do it, this only just does simple esm for now