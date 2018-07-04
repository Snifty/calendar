let select = document.querySelector('select');
let h1 = document.querySelector('h1');

select.onChange = function() {
	let choice = select.value;
	let days = 31;

	if (choice == "February"){
		days = 28;
	}
	if (choice == "April" || choice == "June" || choice == "September" || choice == "November") {
		days = 30;
	}

	createCalendar(days, choice);
}

function createCalendar(days, choice){
	h1.textContent = choice;


	for (let drawDays = 0; drawDays != days; drawDays++) {
		
	}
}

createCalendar(31, "January");