window.addEventListener("DOMContentLoaded", function(event) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			xmlDoc = xhttp.responseXML;
			var txt = "<div class=\"slide-group\">";
			var title = xmlDoc.getElementsByTagName("title");
			var alt = xmlDoc.getElementsByTagName("alt");
			var src = xmlDoc.getElementsByTagName("src");
			for (var i = 0; i < title.length; i++) {
				txt = txt + "<div class=\"slide slide-" + (i + 1) + "\">";
				txt = txt + "<p class=\"phototitle\">" + title[i].childNodes[0].nodeValue + "</p>";
				txt = txt + "<img alt=\"" + alt[i].childNodes[0].nodeValue + "\" ";
				txt = txt + "src=\"" + src[i].childNodes[0].nodeValue + "\"></div>";
			}
			txt = txt + "</div>";
			document.getElementById("slide-viewer").innerHTML = txt;
			$('.slider').each(function() {
				var $this = $(this);
				var $group = $this.find('.slide-group');
				var $slides = $this.find('.slide');
				var buttons = [];
				var currentIndex = 0;
				var timeout;

				function move(newIndex) {
					var animateLeft, slideLeft;
					advance();
					if ($group.is(':animated') || currentIndex === newIndex) {
						return;
					}
					buttons[currentIndex].removeClass('active');
					buttons[newIndex].addClass('active');
					if (newIndex > currentIndex) {
						slideLeft = '100%';
						animateLeft = '-100%';
					} else {
						slideLeft = '-100%';
						animateLeft = '100%';
					}
					$slides.eq(newIndex).css({
						left: slideLeft,
						display: 'block'
					});
					$group.animate({
						left: animateLeft
					}, function() {
						$slides.eq(currentIndex).css({
							display: 'none'
						});
						$slides.eq(newIndex).css({
							left: 0
						});
						$group.css({
							left: 0
						});
						currentIndex = newIndex;
					});
				}

				function advance() {
					clearTimeout(timeout);
					timeout = setTimeout(function() {
						if (currentIndex < ($slides.length - 1)) {
							move(currentIndex + 1);
						} else {
							move(0);
						}
					}, 4000);
				}
				$.each($slides, function(index) {
					var $button = $('<button type="button" class="slide-btn">&bull;</button>');
					if (index === currentIndex) {
						$button.addClass('active');
					}
					$button.on('click', function() {
						move(index);
					}).appendTo('.slide-buttons');
					buttons.push($button);
				});
				advance();
			});
		}
	};
	xhttp.open("GET", "slider-photos.xml", true);
	xhttp.send();
})
