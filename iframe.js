<b:if cond="data:blog.pageType not in {"static_page","error_page"} and data:blog.isMobileRequest == &quot;false&quot; and not data:blog.searchQuery">
  <div class="sticky-ad" id="sticky-ad">
    <div class="sticky-ad-content">
      Kode iklan di sini
    </div>
    <button aria-label="Close this ad" class="sticky-ad-close-button" onclick="document.getElementById('sticky-ad').style.display='none'"/>
  </div>
  <script>function stickyAd(){var e=document.getElementById("sticky-ad");300<window.pageYOffset&&(e.style.display="block",window.removeEventListener("scroll",stickyAd))}window.addEventListener("scroll",stickyAd);</script>
</b:if>
