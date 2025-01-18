function showLaunchButton() {
	const select = document.getElementById("versionSelect");
	const selectedValue = select.value;
	const launchContainer = document.getElementById("launchContainer");
	const launchButton = document.getElementById("launchButton");

	// Show the button only for valid versions
	if (selectedValue.includes("1.8.8") || selectedValue.includes("1.5.2")) {
		launchButton.textContent = `Launch ${selectedValue}`;
	} else {
		launchContainer.style.display = "none";
	}
}

function launchVersion() {
	const select = document.getElementById("versionSelect");
	const selectedValue = select.value;
	alert(`Launching version ${selectedValue}...`);
	// Add your launch logic here
}