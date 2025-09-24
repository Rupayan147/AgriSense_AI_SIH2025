(function () {
	const button = document.getElementById('sign-in');
	const username = document.getElementById('username');
	const password = document.getElementById('password');

	function validate() {
		let valid = true;
		[username, password].forEach((el) => el.classList.remove('input-error'));
		if (!username.value.trim()) { username.classList.add('input-error'); valid = false; }
		if (!password.value.trim()) { password.classList.add('input-error'); valid = false; }
		return valid;
	}

	function submit() {
		if (!validate()) {
			const firstError = document.querySelector('.input-error');
			if (firstError) firstError.focus();
			return;
		}
		console.log('Sign in clicked', { username: username.value });
		alert('Signed in (demo)');
	}

	if (button) {
		button.addEventListener('click', submit);
	}

	[username, password].forEach((el) => {
		el.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				e.preventDefault();
				submit();
			}
		});
	});
})();
