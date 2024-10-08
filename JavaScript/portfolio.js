const toggleButton = document.getElementById('toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
	body.classList.toggle('darkMode');

	if (document.body.classList.contains('darkMode')) {
		toggleButton.textContent = 'Light Mode';
	} else {
		toggleButton.textContent = 'Dark Mode';
	}
});
