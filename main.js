let select = document.querySelector('select');
let h1 = document.querySelector('h1');
let list = document.querySelector('ul');

select.onChange = function() {
	let choice = select.value;
	let days = 31;
	console.log(choice);

	if (choice === "February")
		days = 28;
	if (choice === "April" || choice === "June" || choice === "September" || choice === "November") 
		days = 30;


	createCalendar(days, choice);
}


function createCalendar(days, choice){
	h1.textContent = choice;

	for (let i = 1; i <= days; i++) {
		let listItem = document.createElement('li');
		listItem.textContent = i;
		list.appendChild(listItem);
	}
}

createCalendar(31, "January");