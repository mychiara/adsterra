// adScript.js

document.addEventListener("DOMContentLoaded", function () {
    var adContainer = document.createElement("div");
    adContainer.id = "aswift_3_host";
    adContainer.tabIndex = "0";
    adContainer.title = "Advertisement";
    adContainer.setAttribute("aria-label", "Advertisement");
    adContainer.style.border = "none";
    adContainer.style.height = "300px";
    adContainer.style.width = "360px";
    adContainer.style.margin = "auto";
    adContainer.style.backgroundColor = "transparent";
    adContainer.style.display = "inline-block";
    adContainer.style.overflow = "visible";
    adContainer.innerHTML = '<iframe id="aswift_1" name="aswift_1" style="left:0;position:absolute;top:0;border:0;width:360px;height:300px;" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" width="360" height="300" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-5137446005522648&amp;h=300&amp;slotname=9093952817&amp;w=360&amp;rafmt=11&amp;format=360x300&amp;url=http://yo.fan/santi&amp;host=ca-host-pub-8726151893822553&amp;" data-google-container-id="a!2" data-load-complete="true"></iframe>';

    var adScript = document.createElement("script");
    adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    adScript.setAttribute("async", true);

    document.head.appendChild(adScript);
    document.body.appendChild(adContainer);
});
