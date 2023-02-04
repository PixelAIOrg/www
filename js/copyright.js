(function() {
	let cpr = document.getElementById("copyright");
	cpr.innerHTML = "&copy; 2022 - " + new Date().getFullYear() + " pixelai.org - All Rights Reserved.";
})();

			AOS.init({
				easing: 'ease-out-back',
				duration: 1000
			});

			hljs.initHighlightingOnLoad();
			$('.hero__scroll').on('click', function(e) {
				$('html, body').animate({
					scrollTop: $(window).height()
				}, 1200);
			});
