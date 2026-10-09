const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

const responsiveStylesheet = document.createElement('link');
responsiveStylesheet.rel = 'stylesheet';
responsiveStylesheet.href = 'responsive.css';
document.head.appendChild(responsiveStylesheet);

if (menuToggle && siteNav) {
	menuToggle.addEventListener('click', () => {
		const isOpen = siteNav.classList.toggle('open');
		menuToggle.setAttribute('aria-expanded', String(isOpen));
	});
}

const revealObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
			revealObserver.unobserve(entry.target);
		}
	});
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelectorAll('form').forEach((form) => {
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		const message = form.querySelector('.form-message');
		if (message) message.textContent = 'Thank you. We will be in touch shortly.';
		form.reset();
	});
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.site-nav .nav-cta').forEach((link) => link.remove());
});
