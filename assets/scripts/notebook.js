function toggleIcon(element, state) {
	const src = state === 'show' ? 'assets/images/up-arrow.png' : 'assets/images/down-arrow.png';
	if (element.classList.contains('icon-toggle')) {
		element.src = src;
	} else {
		element.nextElementSibling.src = src;
	}
}

function toggleDisplay(element) {
	const noteHeader = element.parentElement;
	const noteContent = noteHeader.nextElementSibling;

	if (noteContent.classList.contains('show')) {
		noteContent.classList.remove('show');
		toggleIcon(element, 'hide');
	} else {
		noteContent.classList.add('show');
		toggleIcon(element, 'show');
	}
}

const notes = document.querySelectorAll(".note-title, .icon-toggle");

for (let note of notes) {
	note.addEventListener('click', function(event) {
		const target = event.target;

		toggleDisplay(target);
	});
}