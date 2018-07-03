let select = document.querySelector('select');
let month = document.querySelector('h1');

select.addEventListener('change', setMonth);

function setMonth() {
	let choice = select.value;

	if(choice === "January"){
		month.textContent = "January";
	} else {
		month.textContent = "";
	}
}