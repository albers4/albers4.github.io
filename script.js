document.addEventListener("DOMContentLoaded", function() {
	const langButtons = document.querySelectorAll(".lang-button");

	function changeLanguage(langCode) {
		document.documentElement.setAttribute("lang", langCode);

		const spans = document.querySelectorAll(".lang-span");
		spans.forEach(span => {
			if (span.lang === langCode) {
				span.style.display = "inline";
			} else {
				span.style.display = "none";
			}
		});

		localStorage.setItem("selectedLanguage", langCode);
	}

	const savedLanguage = localStorage.getItem("selectedLanguage");
	if (savedLanguage) {
		changeLanguage(savedLanguage);
	} else {
		changeLanguage("de");
	}

	langButtons.forEach(button => {
		button.addEventListener("click", function() {
			const selectedLanguage = button.getAttribute("data-language");
			changeLanguage(selectedLanguage);
		});
	});
});
