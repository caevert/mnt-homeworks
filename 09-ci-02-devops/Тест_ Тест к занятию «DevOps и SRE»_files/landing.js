;(function () {
  var appendScript = function (url) {
    var gss = document.createElement("script");
    gss.type = "text/javascript";
    gss.async = true;
    gss.src = url;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(gss, s);
  };

  try {
    var scripts = document.getElementsByTagName('script');
    var element;
    var trueParams;

    for (var i = 0; i < scripts.length; i++) {
      var el = scripts[i];
      var src = el.getAttribute('src');
      if (!src) continue;

      var match = (/(t\.gdeslon\.ru|gdeslon\.ru|gdeslon\.localhost)(:\d+)?\/landing.js/i).exec(src);
      if (match) {
        var host = match[1];
        var port = match[2];
        var parts = src.split('?');
        var params = parts.length > 1 ? parts.pop() : null;

        if (params && el.getAttribute('data-processed') !== 'true') {
          trueParams = params;
          element = el;
        }
      }
    }

    if (host === 'gdeslon.ru') host = 'www.' + host;
    port = host === 'gdeslon.localhost' ? ':9000' : '';

    var query = '?source=' + encodeURIComponent(window.location.href);
    if (trueParams) query += '&' + trueParams;

    var url = location.protocol + '//' + host + port + '/landing-backend.js' + query;
    appendScript(url);

    if (element) element.setAttribute('data-processed', 'true');
  } catch (e) {
    var _url = "https://gdeslon.ru/error.js?source=legacy_landing&_t=" + Date.now() + "&message=" + encodeURIComponent(e.message);
    appendScript(_url);
  }
})();
