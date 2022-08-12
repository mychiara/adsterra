//<![CDATA[
    var go_current     	= window.location.href;
    var reff     	= document.referrer;

    function rChoice(arr) {
	    return arr[Math.floor(arr.length * Math.random())];
	}

    var direct_link_ads = rChoice([
                            "https://www.highperformancegate.com/d7ha27e5?key=3e13d68a557a37d91e09eff64ec81731/",
                        ]);

    var direct_link_ads_2 = rChoice([
                            "https://shope.ee/6Uhmz5pJ0c/",
                        ]);

    var ars             = rChoice([
                            "https://gochia.app",
                        ]);


    var dir_type        = "arsae"; //refresh, domain, path, arsae


    if(dir_type == 'refresh')
    {
        //REFRESH
        console.log('refresh..');
    }
    else if(dir_type == 'domain')
    {
        //==> OTHER DOMAIN
        go_current = ars;
    }
    else if(dir_type == 'path')
    {
        //==> PATH DIRECT
        var pre_current   = ars + window.location.pathname;
        go_current        = pre_current.includes("?")?pre_current+"&c=1":pre_current+"?c=1";
    }
    else if(dir_type == 'arsae')
    {
        //==> ARSAE DIRECT
        go_current            = ars + '/?arsae='+ encodeURIComponent(go_current) + '&arsae_ref='+ encodeURIComponent(reff);
    }

//]]>

