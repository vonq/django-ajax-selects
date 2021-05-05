(function(w) {
  /**
   * load jquery and jquery-ui if needed
   */

  function not(thing) {
    return typeof thing === 'undefined';
  }

  function loadJS(src) {
    document.write('<script type="text/javascript"  src="' + src + '"><\/script>');
  }

  function loadCSS(href) {
    var script = document.createElement('link');
    script.href = href;
    script.type = 'text/css';
    script.rel = 'stylesheet';
    document.head.appendChild(script);
  }

  if (not(w.jQuery)) {
    loadJS('jquery.min.js');
  }

  if (not(w.jQuery) || not(w.jQuery.ui) || not(w.jQuery.ui.autocomplete)) {
    loadJS('jquery-ui.min.js');
    loadCSS('../css/jquery-ui.css');
  }
})(window);
