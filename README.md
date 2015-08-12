# Hobo Style

Dynamic CSS for your web page!!!

# How to use?

Assuming you're using [browserify](https://github.com/substack/node-browserify):

```bash
npm install hobostyle
```

Then

```js
var hobostyle = require('hobostyle');
```

```js
var mystyle = hobostyle.style('body { background-color: blue; }');
```

Then later,

```js
mystyle.set('body { background-color: red; }');
```

# API

## Style

```js
var mystyle = hobostyle.style(css);
```

This will create a new `<style>` element in your `<head>` containing `css`.

```js
mystyle.set(newCss);
```

This will replace the original css with `newCss`, in the same `<style>` element.

```js
mystyle.remove();
```

Will remove the style element.

## Link

```js
var mystyle = hobostyle.link(cssUrl);
```

This will create a new `<link type="stylesheet" href="...">` element in your `<head>` linking to `cssUrl`.

```js
mystyle.set(newCssUrl);
```

This will set the href to `newCssUrl`.

```js
mystyle.remove();
```

Will remove the style element.
