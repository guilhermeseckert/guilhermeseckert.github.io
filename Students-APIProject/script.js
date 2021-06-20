const elementGallery = document.querySelector("#gallery");
const noResults = document.createElement("h3");
const modal = document.createElement("div");
const numberOfStudentsPerPage = 12;
let directory = null;

modal.classList.add("modal-container");
modal.style.display = "none";
elementGallery.insertAdjacentElement("afterend", modal);

fetchData(`https://randomuser.me/api/?nat=us&results=${numberOfStudentsPerPage}`)
	.then((data) => (directory = createObjectStudent(data)))
	.then((directory) => createElementsInScreean(directory))
	.then(() => createMotals(directory))
	.catch((error) =>
		console.log(error)
	);

function fetchData(url) {
	return fetch(url)
		.then((res) => res.json())
		.catch((error) =>
			console.log("somehting went wrong", error)
		);
}

function createObjectStudent(data) {
	let studentArray = [];
	data.results.forEach((student) => {
		const studentObj= {
			name: `${student.name.first} ${student.name.last}`,
			city: student.location.city,
			state: student.location.state,
			phone: student.phone,
			email: student.email,
			street: `${student.location.street.number} ${student.location.street.name}`,
			zip: student.location.postcode,
			image: student.picture.large,
			birthday: student.dob.date.split('T')[0],
		};
		studentArray.push(studentObj);
	});
	return studentArray;
}

function createElementsInScreean(directory) {
	let card = "";
	directory.forEach((student) => {
		card += `
      <div class="card">
        <div class="card-img-container">
          <img class="card-img" src="${student.image}" alt="profile picture">
        </div>
        <div class="card-info-container">
          <h3 id="name" class="card-name cap">${student.name}</h3>
          <p class="card-text">${student.email}</p>
          <p class="card-text cap">${student.city}</p>
        </div>
      </div>  
      `;
	});
	elementGallery.innerHTML = card;
	elementGallery.appendChild(noResults);
}

function createMotals(directory) {
	let modals = "";
	directory.forEach((student) => {
		modals += `
      <div class="modal">
        <button type="button" class="modal-close-btn" id="modal-close-btn" ><strong>x</strong></button>
        <div class="modal-info-container">
          <img class="modal-img" src="${student.image}" alt="profile picture">
          <h3 id="name" class="modal-name cap">${student.name}</h3>
          <p class="modal-text">${student.email}</p>
          <p class="modal-text cap">${student.city}</p>
          <hr>
          <p class="modal-text">${student.phone}</p>
          <p class="modal-text">${student.street}, ${student.state} ${student.zip}</p>
          <p class="modal-text">Birthday: ${student.birthday}</p>
        </div>
      </div>
      `;
	});
	modal.innerHTML = modals;
}

function hideModal() {
	const modals = document.querySelectorAll(".modal");
	modals.forEach((modal) => {
		modal.style.display = "none";
	});
	modal.style.display = "none";
}


elementGallery.addEventListener("click", (e) => {
	const modals = document.querySelectorAll(".modal");
	const card = document.querySelectorAll(".card");
	hideModal();
	for (let i = 0; i < card.length; i++) {
		if (
			e.target === card[i] ||
			e.target.parentNode === card[i] ||
			e.target.parentNode.parentNode === card[i]
		) {
			modals[i].style.display = "";
			modal.style.display = "";
		}
	}
});

modal.addEventListener("click",  (e) =>{
	if(e.target.textContent === "x") {
		hideModal();
	}
}
)
