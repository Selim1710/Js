////////////////////////     product details     ////////////////////////

// zoom image
var mainImage = document.getElementById("mainImage");
var modal = document.getElementById("modalResult");
var resultImage = document.getElementById("resultImage");

mainImage.onclick = function () {
  modal.style.display = 'block';
  resultImage.src = this.src;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
}

// change image
var subImages = document.querySelector(".sub-img").children;

function changeImage(event) {
  document.querySelector(".pro-image").src = event.children[0].src;

  for (let i = 0; i < subImages.length; i++) {
    subImages[i].classList.remove('active');
  }
  event.classList.add("active");
}

////////////////////////     nav-1      ////////////////////////
let marker = document.querySelector(".marker");
let item = document.querySelectorAll("nav a");

function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

item.forEach((link) => {
  link.addEventListener("click", (e) => {
    indicator(e.target);
  });
});

////////////////////////     notice-2      ////////////////////////
var p = $('.par');
var animator = $('<span class="anim"></span>');
var hidden = $('<span class="hid"></span>')
var textLength = p.text().length;
var offset = 0;

function animate(letter_position) {
  var text = p.text();
  p.text('');
  var textBefore = text.substring(0, letter_position - 1);
  var textAfter = text.substring(letter_position, textLength);
  var letter = text.substr(letter_position - 1, 1);
  animator.text(letter);
  hidden.text(textAfter);
  p.append(textBefore);
  p.append(animator);
  p.append(hidden);
}

var interval = setInterval(function () {
  if (p.hasClass('hid')) p.removeClass('hid');
  if (offset - 2 === textLength) {
    clearInterval(interval);
    p.children('.anim').remove();
    p.children('.hid').remove();
    return;
  }
  animate(offset);
  offset++;
}, 100);