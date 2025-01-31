// loading screen

window.addEventListener("load", function () {
	setTimeout(function () {
		document.getElementById("loading").style.display = "none";
		document.body.classList.remove("overflow");
	}, 3000);
});

// Modal
document.addEventListener("DOMContentLoaded", function () {
	var modal = document.getElementById("myModal");
	var img = document.getElementById("modal-btn");
	var modalImg = document.getElementById("img01");
	img.onclick = function () {
		modal.style.display = "block";
		modalImg.src = "assets/img/mee.jpg";
	};

	var span = document.getElementsByClassName("close")[0];
	span.onclick = function () {
		modal.style.display = "none";
	};
});

//tema
const toggler = document.getElementById("tema");
toggler.addEventListener("change", () => {
	document.body.classList.toggle("dark");
	document.getElementById("modal-btn").classList.toggle("btn-bg");
});

// Typing effect
setInterval(() => {
	setTimeout(function () {
		if (cursor) {
			document.getElementById("cursor").innerHTML = "_";
			document.getElementById("cursor").style.opacity = 0;
			cursor = false;
		} else {
			document.getElementById("cursor").innerHTML = "_";
			document.getElementById("cursor").style.opacity = 1;
			cursor = true;
		}
	}, 0);
}, 400);

// Footer
var isPop = false;

function animateButton() {
	if (isPop == 0) {
		document.getElementById("btn1").style.transform =
			"translateX(-62px) rotate(1080deg)";
		document.getElementById("btn2").style.transform =
			"translateX(-124px) rotate(1080deg)";
		document.getElementById("btn3").style.transform =
			"translateX(-186px) rotate(1080deg)";
		document.getElementById("btn4").style.transform =
			"translateX(-248px) rotate(1080deg)";
		isPop = true;
	} else {
		document.getElementById("btn1").style.transform = "translateX(0)";
		document.getElementById("btn2").style.transform = "translateX(0)";
		document.getElementById("btn3").style.transform = "translateX(0)";
		document.getElementById("btn4").style.transform = "translateX(0)";
		isPop = false;
	}
}
