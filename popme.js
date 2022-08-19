//<![CDATA[
    var go_current     	= window.location.href;
    var reff     	= document.referrer;

    function rChoice(arr) {
	    return arr[Math.floor(arr.length * Math.random())];
	}

     var direct_link_ads = rChoice([
                            "https://www.highperformancegate.com/a8nvng5y6?key=523d30bfe4f9f6435b4f72324e5ab78c/",
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

