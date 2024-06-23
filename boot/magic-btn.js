function doBtn() {
	document.querySelectorAll(".cosas").forEach(element => {
		if (!element.dataset.originalContent) {
			element.dataset.originalContent = element.innerHTML;
		}
		element.innerHTML = "mentira cochina";
	});
}

function undoBtn() {
	document.querySelectorAll(".cosas").forEach(element => {
		if (element.dataset.originalContent) {
			element.innerHTML = element.dataset.originalContent;
		}
	})
	document.querySelector(".row").style.display = '';
	document.querySelector("#Bang").style.display = 'none';
	document.getElementById("contador").innerHTML = "0";
}

function surpriseBtn() {
	document.querySelector(".row").style.display = 'none';
	document.querySelector("#Bang").style.removeProperty('display');
	let nb = document.getElementById("contador").innerHTML;
	document.getElementById("contador").innerHTML = Number(nb) + 1;
}

function nextBtn() {
	window.location.href = "two.html";
}