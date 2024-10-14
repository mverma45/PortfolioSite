const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
	body.classList.toggle('darkModeToggle');

	if (document.body.classList.contains('darkModeToggle')) {
		toggleButton.textContent = 'Light Mode';
	} else {
		toggleButton.textContent = 'Dark Mode';
	}
});
