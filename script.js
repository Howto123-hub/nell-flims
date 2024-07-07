var video = document.getElementById("myVideo");
var muteLink = document.getElementById("muteLink");

muteLink.addEventListener("click", function(e) {
  e.preventDefault(); // Prevent the link from navigating

  if (video.muted) {
    video.muted = false;
    muteLink.innerText = "Mute";
  } else {
    video.muted = true;
    muteLink.innerText = "Unmute";
  }
});

$(document).ready(function() {
	$('.navb').click(function() {
		$('html, body').animate({
			scrollTop: $('#MovTi').offset().top
		}, 1000);
	});
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Text copied to clipboard');
    })
    .catch(err => {
      alert('Error in copying text: ', err);
    });
}

function displayMessage() {
  alert('Still on development');
}

