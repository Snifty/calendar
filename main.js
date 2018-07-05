let select = document.querySelector('select');
let h1 = document.querySelector('h1');
let list = document.querySelector('ul');
let date = new Date();

var weekday = new Array(7);
weekday[0] = "Monday";
weekday[1] = "Tuesday";
weekday[2] = "wednesday";
weekday[3] = "Thursday";
weekday[4] = "Friday";
weekday[5] = "Saturday";
weekday[6] = "Sunday";


select.addEventListener('change', function(){
	let choice = select.value;
	let days = 31;

	if (choice === "February")
		days = 28;
	if (choice === "April" || choice === "June" || choice === "September" || choice === "November") 
		days = 30;


	createCalendar(days, choice);
})



function createCalendar(days, choice){
	h1.textContent = choice;
	let today = date.getDate();

	for (let i = 1; i <= days; i++) {
		/*if(i == today) {
			i.setAttribute("id", "today");
		}*/

		if(i % 7 == 0) {
			let listItem = document.createElement('li');
			listItem.className = "sunday";
			listItem.textContent = i;
			list.appendChild(listItem);
		} else {
			let listItem = document.createElement('li');
			listItem.textContent = i;
			list.appendChild(listItem);
		}
	}

}


createCalendar(31, "January");