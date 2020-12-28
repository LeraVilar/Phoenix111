document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('mainForm');
	form.addEventListener('submit', formSend);


	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);
		if (error === 0) {
			window.location.href = "../site1/good_list/index.html"

		}	
		
		
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_tel')) {
				if (telTest(input)) {
					formAddError(input);
					error++;
				}}
			if (input.classList.contains('_name')) {
				if (nameTest(input)) {
					formAddError(input);
					error++;
				}
				}
			else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}

		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error')
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error')
	}
	function telTest(input) {
		return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
	}
	function nameTest(input) {
		return !/^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/.test(input.value);
	}

});