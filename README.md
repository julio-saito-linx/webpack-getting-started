webpack-getting-started
=======================
http://webpack.github.io/docs/tutorials/getting-started/

### Get
```
git clone git@github.com:saitodisse/webpack-getting-started.git
cd webpack-getting-started
```

### Install
```
sudo npm i webpack -g
sudo npm i webpack-dev-server -g
npm i
```

### Run
```
webpack-dev-server --progress --colors
http://localhost:8080/webpack-dev-server/bundle
```

### What you should be seeing
![Screenshot](https://github.com/saitodisse/webpack-getting-started/blob/master/docs/img/Screenshot%20from%202014-08-31%2013:45:08.png)


## The code

#### index.html
```html
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
    </body>
</html>
```

#### entry.js
```javascript
require("./style.css");
document.write(require("./content.js"));
```

#### content.js
```javascript
module.exports = "It works from content.js.";
```

#### style.css
```css
body {
    background: yellow;
}
```

#### webpack.config.js
```js
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
```

