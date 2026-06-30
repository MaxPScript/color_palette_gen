const sliderRed = document.getElementById("slider_red_id");
const sliderGreen = document.getElementById("slider_green_id");
const sliderBlue = document.getElementById("slider_blue_id");
const valueRed = document.getElementById("value_red_id");
const valueGreen = document.getElementById("value_green_id");
const valueBlue = document.getElementById("value_blue_id");
const btn = document.getElementById("btn_id");
//
function updateColor() {
	const r = sliderRed.value;
	const g = sliderGreen.value;
	const b = sliderBlue.value;
	//
	valueRed.textContent = r;
	valueGreen.textContent = g;
	valueBlue.textContent = b;
	//
	btn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
//
sliderRed.addEventListener("input", updateColor);
sliderGreen.addEventListener("input", updateColor);
sliderBlue.addEventListener("input", updateColor);
//
updateColor();
