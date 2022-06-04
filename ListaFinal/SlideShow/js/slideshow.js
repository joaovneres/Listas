let index = 0;

const slides = document.getElementsByClassName("slide");

const dots = document.getElementsByClassName("dot");

let contar = null;


mostrarAutomatico();

function temporizador() {
  contar = setTimeout(mostrarAutomatico, 3000);
}

function pularSlide(x) {
  mostrarManual(index += x++);
}

function irSlide(x) {
  mostrarManual(index = x++);
}

function mostrarManual(x) {
  clearTimeout(contar);
  let i;
  if (x > slides.length) {
    index = 1;
  }
  if (x < 1) {
    index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index - 1].style.display = "block";
  dots[index - 1].className += " active";
  temporizador();
}

function mostrarAutomatico() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) {
    index = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index - 1].style.display = "block";
  dots[index - 1].className += " active";
  temporizador();
}

function inserirLegenda(x) {
  const legendas = document.getElementsByClassName('text');
  if (x == 1) {
    let legenda1 = document.getElementById('legenda1').value;
    legendas[0].innerHTML = legenda1;
  }
  else if (x == 2) {
    let legenda2 = document.getElementById('legenda2').value;
    legendas[1].innerHTML = legenda2;
  } else if (x == 3) {
    let legenda3 = document.getElementById('legenda3').value;
    legendas[2].innerHTML = legenda3;
  }
}