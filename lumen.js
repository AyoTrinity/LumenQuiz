let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 3000); 
}

let quizTimeout = setInterval(function() {
  let regTimer = new Date("Oct 1, 2024 11:59:59").getTime();
  let regStopTimer = new Date().getTime();
  let timeDifference = regTimer - regStopTimer;
  let regDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let regHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("regTimer").innerHTML = regDays + "Days " + regHours + "Hrs "
  + minutes + "Mins " + seconds + "Secs "; 
  if (timeDifference < 0) {
    clearInterval(quizTimeout);
    document.getElementById("regTimer").innerHTML = "Expired";
  }
}, 1000);