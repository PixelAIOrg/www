(function() {
	let cpr = document.getElementById("copyright");
	cpr.innerHTML = "&copy; 2022 - " + new Date().getFullYear() + " pixelai.org - All Rights Reserved.";
})();

AOS.init({
	easing: 'ease-out-back',
	duration: 1000
});

if (document.querySelector('.glider')) {
	new Glider(document.querySelector('.glider'), {
		draggable: true,
		dots: '.dots',
		arrows: {
			prev: '.glider-prev',
			next: '.glider-next'
		},
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]

	});
}

const navbar = document.querySelector('.navigation');
window.onscroll = () => {
	if (window.scrollY > 100) {
		navbar.classList.add('nav-bg');
	} else {
		navbar.classList.remove('nav-bg');
	}
};
