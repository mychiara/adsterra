<script type="text/javascript" language="javascript">
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
</script>
