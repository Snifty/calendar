let select = document.querySelector('select');
let month = document.querySelector('h1');

select.addEventListener('change', setMonth);

function setMonth() {
	let choice = select.value;

	switch(choice){
		case "January":
			month.textContent = "January";
			break;
		case "February":
			month.textContent = "February";
			break;
		case "March":
			month.textContent = "March";
			break;
		case "April":
			month.textContent = "April";
			break;
		case "May":
			month.textContent = "May";
			break;
		case "June":
			month.textContent = "June";
			break;
		case "July":
			month.textContent = "July";
			break;
		case "August":
			month.textContent = "August";
			break;
		case "September":
			month.textContent = "September";
			break;
		case "October":
			month.textContent = "October";
			break;
		case "November":
			month.textContent = "November";
			break;
		case "December":
			month.textContent = "December";
			break;
		default:
			month.textContent = "";
	}
}