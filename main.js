let select = document.querySelector('select');
let month = document.querySelector('h1');

select.addEventListener('change', setMonth);

function setMonth() {
	let choice = select.value;

	month.textContent = choice;
}

function createCAlendar(){
	let days = 31;
	if (choice == "February")
		days = 28;
	if (choice == "April" || choice == "June" || choice == "September" || choice == "November")
		days = 30;
	for (let drawDays = 0; drawDays != days; drawDays++) {
		
	}
}