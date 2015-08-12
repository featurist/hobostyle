exports.style = function(css) {
  function textNode(css) {
    if (css) {
      return document.createTextNode(css);
    } else {
      return document.createTextNode('');
    }
  }

  var style = document.createElement('style');
  style.type = 'text/css';

  var cssText = textNode(css);
  style.appendChild(cssText);

  document.head.appendChild(style);

  function set(moreCss) {
    style.removeChild(cssText);
    cssText = textNode(moreCss);
    style.appendChild(cssText);
  }

  return {
    set: set,
    unset: set,

    remove: function () {
      document.head.removeChild(style);
    }
  };
};

exports.link = function(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;

  document.head.appendChild(link);

  function set(url) {
    link.src = url;
  }

  return {
    set: set,
    unset: set,

    remove: function () {
      document.head.removeChild(link);
    }
  };
};
