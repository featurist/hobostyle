# Hobo Style

Dynamic CSS for your web page!!!

# How to use?

Assuming you're using [browserify](https://github.com/substack/browserify).

    npm install hobostyle

Then

    var hobostyle = require('hobostyle');

    var mystyle = hobostyle.style('body { background-color: blue; }');

Then later,

    mystyle.set('body { background-color: red; }');

# API

    var mystyle = hobostyle.style(css);

This will create a new `<style>` element in your `<head>` containing `css`.

    mystyle.set(newCss);

This will replace the original css with `newCss`, in the same `<style>` element.
