

function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const isOpen = menuLinks.classList.contains('open');

  // Toggle menu visibility
  menuLinks.classList.toggle('open');

  // Handle outside clicks (optional)
  if (isOpen) {
    document.addEventListener('click', outsideClickHandler);
  } else {
    document.removeEventListener('click', outsideClickHandler);
  }
}

function outsideClickHandler(event) {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerMenu = document.querySelector('.hamburger-menu'); // Ensure click is outside menu

  if (!hamburgerMenu.contains(event.target) && menuLinks.classList.contains('open')) {
    menuLinks.classList.remove('open');
    document.removeEventListener('click', outsideClickHandler);
  }
}

function openPopup(videoSrc) {
  var popup = document.getElementById("popup");
  var video = document.getElementById("popup-video");

  // Thêm tham số autoplay để video tự động phát
  videoSrc += "?autoplay=1&enablejsapi=1"; // Thêm enablejsapi để kiểm soát player

  video.src = videoSrc;
  popup.style.display = "flex";
}

// Close popup and stop video when clicking outside the video
window.onclick = function (event) {
  var popup = document.getElementById("popup");
  var video = document.getElementById("popup-video");
  if (event.target == popup) {
    popup.style.display = "none";
    video.src = ""; // Dừng video bằng cách xóa src
  }
};



// whatsapp api js 
