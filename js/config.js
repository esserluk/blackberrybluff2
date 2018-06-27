window.addEventListener("DOMContentLoaded", function(event) {
	header = "<img id=\"logo\" alt=\"Logo\" src=\"media/Logo.gif\">" +
		"<nav><ul>" +
		"<li><a href=\"index.html\">Home</a></li>" +
		"<li><a href=\"photos.html\">Photos</a></li>" +
		"<li><a href=\"amenities.html\">Amenities &amp; Attractions</a></li>" +
		"<li><a href=\"rates.html\">Rates &amp; Contact</a></li>" +
		"<li><a href=\"map.html\">Map &amp; Directions</a></li>" +
		"</ul></nav>";
	document.getElementById("header").innerHTML = header;
	footer = "<img id=\"berrypile\" alt=\"berrypile\" src=\"media/BerryPile.gif\">" +
		"<p id=\"copyright\">Copyright &copy; " + new Date().getFullYear() +
		" Linda Blakkan and Lukas Esser</p>";
	document.getElementById("footer").innerHTML = footer;
})
