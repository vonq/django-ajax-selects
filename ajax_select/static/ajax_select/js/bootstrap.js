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
    loadJS('/static/ajax_select/js/jquery.min.js');
  }

  if (not(w.jQuery) || not(w.jQuery.ui) || not(w.jQuery.ui.autocomplete)) {
    loadJS('/static/ajax_select/js/jquery-ui.min.js');
    loadCSS('/static/ajax_select/css/jquery-ui.min.css');
  }
})(window);
