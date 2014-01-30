# Hobo Style

Dynamic CSS for your web page!!!

# How to use?

Assuming you're using [browserify](https://github.com/substack/node-browserify):

    npm install hobostyle

Then

    var hobostyle = require('hobostyle');

    var mystyle = hobostyle.style('body { background-color: blue; }');

Then later,

    mystyle.set('body { background-color: red; }');

# API

## Style

    var mystyle = hobostyle.style(css);

This will create a new `<style>` element in your `<head>` containing `css`.

    mystyle.set(newCss);

This will replace the original css with `newCss`, in the same `<style>` element.

## Link

    var mystyle = hobostyle.link(cssUrl);

This will create a new `<style>` element in your `<head>` linking to `css`.

    mystyle.set(newCssUrl);

This will link to `newCssUrl` replacing the old link.
