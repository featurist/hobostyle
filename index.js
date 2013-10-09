exports.style = function(css) {
  var style = document.createElement('style');
  var cssText = document.createTextNode(css);
  style.appendChild(cssText);

  document.head.appendChild(style);

  return {
    set: function (moreCss) {
      style.removeChild(cssText);
      cssText = document.createTextNode(moreCss);
      style.appendChild(cssText);
    }
  };
};
