var topPositionO = 0;
var leftPositionO = 250;
var rightPositionO = 800;
var topPositionG = 0;
var leftPositionG = 250;
var rightPositionG = 800;
var topPositionI = 0;
var leftPositionI = 250;
var rightPositionI = 800;
var topPositionM = 0;
var leftPositionM = 250;
var rightPositionM = 800;
var topPositionW = 0;
var leftPositionW = 250;
var rightPositionW = 800;
var topPositionWa = 0;
var leftPositionWa = 250;
var rightPositionWa = 800;
var topPositionS = 0;
var leftPositionS = 250;
var rightPositionS = 800;
var topPositionSe = 0;
var leftPositionSe = 250;
var rightPositionSe = 800;
var direction = 1;
var igloo = document.getElementById("igloo");
var global_warming = document.getElementById("global_warming");
var orca = document.getElementById("orca");
var moose = document.getElementById("moose");
var wolverine = document.getElementById("wolverine");
var walrus = document.getElementById("walrus");
var snowy_owl = document.getElementById("snowy_owl");
var seal = document.getElementById("seal");
var orcaInterval;
var iglooInterval;
var global_warmingInterval;
var mooseInterval;
var wolverineInterval;
var walrusInterval;
var snowy_owlInterval;
var sealInterval;
var negative = false;



function move(animal) {
  var go = animal;
  gotop = go.style.top;

  if (+gotop.replace('px', '') > 800) {

    stopAnimal(go);
    if (go == orca) {
      window.clearInterval(orcaInterval);
      seconds -= 5000;
    }
    else if (go == igloo) {
      window.clearInterval(iglooInterval);

    }
    else if (go == global_warming) {
      window.clearInterval(global_warmingInterval);

      secondsSubtract()
    }
    else if (go == moose) {
      window.clearInterval(mooseInterval);
      seconds -= 500;
    }
    else if (go == wolverine) {
      window.clearInterval(wolverineInterval);
      seconds -= 50;
    }
    else if (go == walrus) {
      window.clearInterval(walrusInterval);

    }
    else if (go == snowy_owl) {
      window.clearInterval(snowy_owlInterval);

    }
    else if (go == seal) {
      window.clearInterval(sealInterval);

    }


  }
  else {

    if (go == orca) {
      go.style.top = topPositionO + "px";
      go.style.left = leftPositionO + "px";
      go.style.right = rightPositionO + "px";
      go.style.visibility = "visible";
      topPositionO++;
    }
    else if (go == igloo) {
      go.style.top = topPositionI + "px";
      go.style.left = leftPositionI + "px";
      go.style.right = rightPositionI + "px";
      go.style.visibility = "visible";
      topPositionI++;
    }
    else if (go == global_warming) {
      go.style.top = topPositionG + "px";
      go.style.left = leftPositionG + "px";
      go.style.right = rightPositionG + "px";
      go.style.visibility = "visible";
      topPositionG++;
    }
    else if (go == moose) {
      go.style.top = topPositionM + "px";
      go.style.left = leftPositionM + "px";
      go.style.right = rightPositionM + "px";
      go.style.visibility = "visible";
      topPositionM++;
    }
    else if (go == wolverine) {
      go.style.top = topPositionW + "px";
      go.style.left = leftPositionW + "px";
      go.style.right = rightPositionW + "px";
      go.style.visibility = "visible";
      topPositionW++;
    }
    else if (go == walrus) {
      go.style.top = topPositionWa + "px";
      go.style.left = leftPositionWa + "px";
      go.style.right = rightPositionWa + "px";
      go.style.visibility = "visible";
      topPositionWa++;
    }
    else if (go == snowy_owl) {
      go.style.top = topPositionS + "px";
      go.style.left = leftPositionS + "px";
      go.style.right = rightPositionS + "px";
      go.style.visibility = "visible";
      topPositionS++;
    }
    else if (go == seal) {
      go.style.top = topPositionSe + "px";
      go.style.left = leftPositionSe + "px";
      go.style.right = rightPositionSe + "px";
      go.style.visibility = "visible";
      topPositionSe++;
    }






  }

}

function stopAnimal(go) {
  if (go == orca) {
    topPositionO = 0
  }
  else if (go == igloo) {
    topPositionI = 0
  }
  else if (go == global_warming) {
    topPositionG = 0
  }
  else if (go == moose) {
    topPositionM = 0
  }
  else if (go == wolverine) {
    topPositionW = 0
  }
  else if (go == walrus) {
    topPositionWa = 0
  }
  else if (go == snowy_owl) {
    topPositionS = 0
  }
  else if (go == seal) {
    topPositionSe = 0
  }

  go.style.top = 0 + "px";
  go.style.visibility = "hidden";

}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function orcaMove() {
  window.clearInterval(orcaInterval)
  leftPositionO = getRandomArbitrary(-500, 500);
  rightPositionO = 800 - leftPositionO;
  var speed = getRandomArbitrary(10, 30)
  orcaInterval = setInterval('move(orca)', speed);



}

function iglooMove() {
  window.clearInterval(iglooInterval)
  leftPositionI = getRandomArbitrary(-500, 500);
  rightPositionI = 800 - leftPositionI;
  var speed = getRandomArbitrary(10, 30)
  iglooInterval = setInterval('move(igloo)', speed);



}
function global_warmingMove() {
  window.clearInterval(global_warmingInterval)
  leftPositionG = getRandomArbitrary(-500, 500);
  rightPositionG = 800 - leftPositionG;
  var speed = getRandomArbitrary(10, 30)
  global_warmingInterval = setInterval('move(global_warming)', speed);



}
function mooseMove() {
  window.clearInterval(mooseInterval)
  leftPositionM = getRandomArbitrary(-500, 500);
  rightPositionM = 800 - leftPositionM;
  var speed = getRandomArbitrary(10, 30)
  mooseInterval = setInterval('move(moose)', speed);



}
function wolverineMove() {
  window.clearInterval(wolverineInterval)
  leftPositionW = getRandomArbitrary(-500, 500);
  rightPositionW = 800 - leftPositionW;
  var speed = getRandomArbitrary(10, 30)
  wolverineInterval = setInterval('move(wolverine)', speed);



}
function walrusMove() {
  window.clearInterval(walrusInterval)
  leftPositionWa = getRandomArbitrary(-500, 500);
  rightPositionWa = 800 - leftPositionWa;
  var speed = getRandomArbitrary(10, 30)
  walrusInterval = setInterval('move(walrus)', speed);



}
function snowy_owlMove() {
  window.clearInterval(snowy_owlInterval)
  leftPositionS = getRandomArbitrary(-500, 500);
  rightPositionS = 800 - leftPositionS;
  var speed = getRandomArbitrary(10, 30)
  snowy_owlInterval = setInterval('move(snowy_owl)', speed);



}
function sealMove() {
  window.clearInterval(sealInterval)
  leftPositionSe = getRandomArbitrary(-500, 500);
  rightPositionSe = 800 - leftPositionSe;
  var speed = getRandomArbitrary(10, 30)
  sealInterval = setInterval('move(seal)', speed);



}





// orcaMove();

var fish = false;
var platypus = false;
var bee = false;
var pug = false;
var simeon = false;
var panda = false;
var sun = false;
var water = false;
var egg = false;
var clobear = false;
var defaults = false;
var crown = false;
var rainbow = false;
var rizz = false;
var koah = false;

var current_background = 0;

var bought_platypus = false;
var bought_bee = false;
var bought_pug = false;
var bought_simeon = false;
var bought_panda = false;
var bought_sun = false;
var bought_water = false;
var bought_egg = false;
var bought_clobear = false;

var slidePosition = 1;

if (localStorage.getItem('current_background') == 0 || localStorage.getItem('current_background') == null) {
  background0();
  slidePosition = 1;
}
else if (localStorage.getItem('current_background') == 1) {
  background1();
  slidePosition = 2;
}
else if (localStorage.getItem('current_background') == 2) {
  background2();
  slidePosition = 3;
}
else if (localStorage.getItem('current_background') == 3) {
  background3();
  slidePosition = 4;
}
else if (localStorage.getItem('current_background') == 4) {
  background4();
  slidePosition = 5;
}
else if (localStorage.getItem('current_background') == 5) {
  background5();
  slidePosition = 6;
}



SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) { slidePosition = 1 }
  if (n < 1) { slidePosition = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  // circles[slidePosition-1].className += " enable";
}









if (localStorage.getItem('bought_platypus') == 'true') {
  bought_platypus = true;
}
if (localStorage.getItem('bought_bee') == 'true') {
  bought_bee = true;
}
if (localStorage.getItem('bought_pug') == 'true') {
  bought_pug = true;
}
if (localStorage.getItem('bought_simeon') == 'true') {
  bought_simeon = true;
}
if (localStorage.getItem('bought_panda') == 'true') {
  bought_panda = true;
}
if (localStorage.getItem('bought_sun') == 'true') {
  bought_sun = true;
}
if (localStorage.getItem('bought_water') == 'true') {
  bought_water = true;
}
if (localStorage.getItem('bought_egg') == 'true') {
  bought_egg = true;
}
if (localStorage.getItem('bought_clobear') == 'true') {
  bought_clobear = true;
}


var interval;

if (localStorage.getItem('current_skin') == 'fish') {
  startFish();
  fish = true
}
if (localStorage.getItem('current_skin') == 'crown') {
  startCrown();
  crown = true
}
if (localStorage.getItem('current_skin') == 'rainbow') {
  startTimer();
  rainbow = true
}
if (localStorage.getItem('current_skin') == 'rizz') {
  startRizz();
  rizz = true
}
if (localStorage.getItem('current_skin') == 'koah') {
  startKoah();
  koah = true
}
if (localStorage.getItem('current_skin') == 'default' || localStorage.getItem('current_skin') == null) {
  startDefault();
  defaults = true
}
if (localStorage.getItem('current_skin') == 'platypus') {
  startPlatypus();
  platypus = true
}
if (localStorage.getItem('current_skin') == 'bee') {
  startBee();
  bee = true
}
if (localStorage.getItem('current_skin') == 'pug') {
  startPug();
  pug = true
}
if (localStorage.getItem('current_skin') == 'simeon') {
  startSimeon();
  simeon = true
}
if (localStorage.getItem('current_skin') == 'panda') {
  startPanda();
  panda = true
}
if (localStorage.getItem('current_skin') == 'sun') {
  startSun();
  sun = true
}
if (localStorage.getItem('current_skin') == 'water') {
  startWater();
  water = true
}
if (localStorage.getItem('current_skin') == 'egg') {
  startEgg();
  egg = true
}
if (localStorage.getItem('current_skin') == 'clobear') {
  startClobear();
  clobear = true
}

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .cancel') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});



function closeModal($el) {
  $el.classList.remove('is-active');
}

function closeAllModals() {
  (document.querySelectorAll('.modal') || []).forEach(($modal) => {
    closeModal($modal);
  });
}


var seconds = 0
var highest_streak = 0;
var streak = 0;
if (localStorage.getItem("seconds") == null) {

}
else {
  seconds = parseInt(localStorage.getItem("seconds"));
}
if (localStorage.getItem("highest_streak") == null) {

}
else {
  highest_streak = parseInt(localStorage.getItem("highest_streak"));
}

var el = document.getElementById('seconds-counter');
var streak_counter = document.getElementById('streak_counter');
var set_1 = document.getElementById('set_1');
var set_2 = document.getElementById('set_2');
var stat = document.getElementById('status')
var current_streak = document.getElementById('current_streak');

function incrementSeconds() {
  if (document.getElementById("image").src == "https://polarbearsupreme.mewtubelindor.repl.co/assets/pillaging_platypus.png") {
    localStorage.removeItem("seconds");
    localStorage.removeItem("highest_streak");
    seconds = 0;
    highest_streak = 0;
    streak = 0;
  }

  else {
    if (negative == false) {
      seconds += 1;
    }
    else {
      seconds -= 1;
    }

    streak += 1;
    localStorage.setItem("seconds", JSON.stringify(seconds));
  }



  if (highest_streak < streak) {
    highest_streak = streak;
    localStorage.setItem("highest_streak", highest_streak);
    document.getElementById('streak_counter').style.color = "red"
  }

  el.innerText = seconds;

  function ConvertSectoDay(n) {
    var day = parseInt(n / (24 * 3600));

    n = n % (24 * 3600);
    var hour = parseInt(n / 3600);

    n %= 3600;
    var minutes = n / 60;

    n %= 60;
    var seconds = n;

    return (
      day + "d" + " " + hour + "h" + " "
      + minutes.toFixed() + "m");

  }


  document.getElementById('converter').innerText = ConvertSectoDay(seconds);

  streak_counter.innerText = highest_streak + " ";
  set_2.innerText = "seconds.";
  current_streak.innerText = streak;


  if (getRandomArbitrary(1, 10000) == 1) {
    //every 2 hours
    orcaMove();
    console.log("orca");

  }
  if (getRandomArbitrary(1, 50000) == 1) {
    //every 2 hours
    iglooMove();
    console.log("igloo");

  }
  if (getRandomArbitrary(1, 50000) == 1) {
    //every 2 hours
    global_warmingMove();
    console.log("global_warming");

  }
  if (getRandomArbitrary(1, 5000) == 1) {
    //every hour
    mooseMove();
    console.log("moose");
  }
  if (getRandomArbitrary(1, 1000) == 1) {
    //every 15 minutes
    wolverineMove();
    console.log("wolverine");
  }
  if (getRandomArbitrary(1, 1000) == 1) {
    //every 15 minutes
    walrusMove();
    console.log("walrus");
  }
  if (getRandomArbitrary(1, 5000) == 1) {
    //every hour
    snowy_owlMove();
    console.log("snowy_owl");
  }
  if (getRandomArbitrary(1, 10000) == 1) {
    //every 2 hours
    sealMove();
    console.log("seal");
  }
  if (getRandomArbitrary(1, 1000000) == 1) {
    //one in a million chance of clobear
    startClobear()

  }

}

//lbozo

function secondsSubtract() { //7200000
  negative = true;
  localStorage.setItem("negative", 'true');
  if (document.getElementById('seconds-counter').style.color == 'white') {
    window.setTimeout('stopSecondsSubtract("white")', 7200000);
  }
  else if (document.getElementById('seconds-counter').style.color == 'black') {
    window.setTimeout('stopSecondsSubtract("black")', 7200000);
  }

  document.getElementById('seconds-counter').style.color = '#fe0707';
}

function stopSecondsSubtract(color) {
  negative = false;
  localStorage.setItem("negative", 'false');
  document.getElementById('seconds-counter').style.color = color;
}

var adding;

function addFast() {
  seconds += 1;
}

function secondsAdd() { //30000
  adding = setInterval('addFast()', 1)
  if (document.getElementById('seconds-counter').style.color == 'white') {
    window.setTimeout('stopSecondsAdd("white")', 30000);
  }
  else if (document.getElementById('seconds-counter').style.color == 'black') {
    window.setTimeout('stopSecondsAdd("black")', 30000);
  }
  document.getElementById('seconds-counter').style.color = '#48c774';
}

function stopSecondsAdd(color) {
  clearInterval(adding)
  document.getElementById('seconds-counter').style.color = color;
}

function statusFunc() {
  if (seconds >= 0 && seconds < 10) {
    stat.innerText = "You are a disappointment." + " Next status bestowed at 10 seconds."
  } else if (seconds >= 10 && seconds < 25) {
    stat.innerText = "You are a habitat destroyer." + " Next status bestowed at 25 seconds."
  } else if (seconds >= 25 && seconds < 50) {
    stat.innerText = "You are an iceberg melter." + " Next status bestowed at 50 seconds."
  } else if (seconds >= 50 && seconds < 100) {
    stat.innerText = "Eeeeeeeeeeeeeeeeeeh" + " Next status bestowed at 100 seconds."
  } else if (seconds >= 100 && seconds < 250) {
    stat.innerText = "Ooooooooooooooooooh!" + " Next status bestowed at 250 seconds."
  } else if (seconds >= 250 && seconds < 1000) {
    stat.innerText = "You are a global warming preventer!" + " Next status bestowed at 1000 seconds."
  } else if (seconds >= 1000 && seconds < 2500) {
    stat.innerText = "You have a brown polar bear." + " Next status bestowed at 2500 seconds."
  } else if (seconds >= 2500 && seconds < 10000) {
    stat.innerText = "You're in the arctic." + " Next status bestowed at 10000 seconds."
  } else if (seconds >= 10000 && seconds < 25000) {
    stat.innerText = "It has white fur!" + " Next status bestowed at 25000 seconds."
  } else if (seconds >= 25000 && seconds < 50000) {
    stat.innerText = "Awwww, a baby polar bear!" + " Next status bestowed at 50000 seconds."
  } else if (seconds >= 50000 && seconds < 100000) {
    stat.innerText = "Evolution is a magnificent phenomenon." + " Next status bestowed at 100000 seconds."
  } else if (seconds >= 100000 && seconds < 250000) {
    stat.innerText = "Why are you so addicted to polar bears?" + " Next status bestowed at 250000 seconds."
  } else if (seconds >= 250000 && seconds < 500000) {
    stat.innerText = "You're chillin'" + " Next status bestowed at 500000 seconds."
  } else if (seconds >= 500000 && seconds < 1000000) {
    stat.innerText = "You is one with the polar bear." + " Next status bestowed at 1000000 seconds."
  } else if (seconds >= 1000000) {
    stat.innerText = "Furry."
  }

  // 100-you're in the artic250-you're chillin500-you is one with the polar bear1 mil-furry


  if (defaults == false) {
    document.getElementById('default_button').disabled = false;
    document.getElementById('default_button').innerText = "Equip";
  }
  else {
    document.getElementById('default_button').disabled = true;
    document.getElementById('default_button').innerText = "Equipped";
  }









  if (highest_streak >= 10000) {
    if (fish == false) {
      document.getElementById('fish_button').disabled = false;
      document.getElementById('fish_button').innerText = "Equip";
    }
    else {
      document.getElementById('fish_button').disabled = true;
      document.getElementById('fish_button').innerText = "Equipped";
    }
  }

  else {
    document.getElementById('fish_button').disabled = true;
    document.getElementById('fish_button').innerText = "Unlock at 10,000 highest streak";

  }




  if (highest_streak >= 50000) {
    if (crown == false) {
      document.getElementById('crown_button').disabled = false;
      document.getElementById('crown_button').innerText = "Equip";
    }
    else {
      document.getElementById('crown_button').disabled = true;
      document.getElementById('crown_button').innerText = "Equipped";
    }
  }
  else {
    document.getElementById('crown_button').disabled = true;
    document.getElementById('crown_button').innerText = "Unlock at 50,000 highest streak";

  }

  if (highest_streak >= 100000) {
    if (rainbow == false) {
      document.getElementById('rainbow_button').disabled = false;
      document.getElementById('rainbow_button').innerText = "Equip";
      document.getElementById('image').classList.remove('fade');
      clearInterval(interval);

    }
    else {
      document.getElementById('rainbow_button').disabled = true;
      document.getElementById('rainbow_button').innerText = "Equipped";
    }
  }
  else {
    document.getElementById('rainbow_button').disabled = true;
    document.getElementById('rainbow_button').innerText = "Unlock at 100,000 highest streak";

  }

if (highest_streak >= 250000) {
    if (rizz == false) {
      document.getElementById('rizz_button').disabled = false;
      document.getElementById('rizz_button').innerText = "Equip";
      

    }
    else {
      document.getElementById('rizz_button').disabled = true;
      document.getElementById('rizz_button').innerText = "Equipped";
    }
  }
  else {
    document.getElementById('rizz_button').disabled = true;
    document.getElementById('rizz_button').innerText = "Unlock at 250,000 highest streak";

  }

  if (highest_streak >= 500000) {
    if (koah == false) {
      document.getElementById('koah_button').disabled = false;
      document.getElementById('koah_button').innerText = "Equip";
      

    }
    else {
      document.getElementById('koah_button').disabled = true;
      document.getElementById('koah_button').innerText = "Equipped";
    }
  }
  else {
    document.getElementById('koah_button').disabled = true;
    document.getElementById('koah_button').innerText = "Unlock at 500,000 highest streak";

  }

  if (bought_platypus == true) {
    if (platypus == false) {
      document.getElementById('platypus_button').disabled = false;
      document.getElementById('platypus_button').innerText = "Equip";
    }
    else {
      document.getElementById('platypus_button').disabled = true;
      document.getElementById('platypus_button').innerText = "Equipped";
    }
  }

  else {
    if (seconds >= 100000) {
      document.getElementById('platypus_button').disabled = false;
      document.getElementById('platypus_button').innerText = "Buy with 100000 seconds";
    }
    else {
      document.getElementById('platypus_button').disabled = true;
      document.getElementById('platypus_button').innerText = "Buy with 100000 seconds";
    }


  }


  if (bought_bee == true) {
    if (bee == false) {
      document.getElementById('bee_button').disabled = false;
      document.getElementById('bee_button').innerText = "Equip";
    }
    else {
      document.getElementById('bee_button').disabled = true;
      document.getElementById('bee_button').innerText = "Equipped";
    }
  }

  else {
    if (seconds >= 250000) {
      document.getElementById('bee_button').disabled = false;
      document.getElementById('bee_button').innerText = "Buy with 250000 seconds";
    }
    else {
      document.getElementById('bee_button').disabled = true;
      document.getElementById('bee_button').innerText = "Buy with 250000 seconds";
    }


  }



  if (bought_pug == true) {
    if (pug == false) {
      document.getElementById('pug_button').disabled = false;
      document.getElementById('pug_button').innerText = "Equip";
    }
    else {
      document.getElementById('pug_button').disabled = true;
      document.getElementById('pug_button').innerText = "Equipped";
    }
  }

  else {
    if (seconds >= 500000) {
      document.getElementById('pug_button').disabled = false;
      document.getElementById('pug_button').innerText = "Buy with 500000 seconds";
    }
    else {
      document.getElementById('pug_button').disabled = true;
      document.getElementById('pug_button').innerText = "Buy with 500000 seconds";
    }


  }


  

  if (bought_simeon == true) {
    if (simeon == false) {
      document.getElementById('simeon_button').disabled = false;
      document.getElementById('simeon_button').innerText = "Equip";
    }
    else {
      document.getElementById('simeon_button').disabled = true;
      document.getElementById('simeon_button').innerText = "Equipped";
    }
  }

  else {
    if (seconds >= 1000000) {
      document.getElementById('simeon_button').disabled = false;
      document.getElementById('simeon_button').innerText = "Buy with 1000000 seconds";
    }
    else {
      document.getElementById('simeon_button').disabled = true;
      document.getElementById('simeon_button').innerText = "Buy with 1000000 seconds";
    }


  }


  if (bought_panda == true) {
    if (panda == false) {
      document.getElementById('panda_button').disabled = false;
      document.getElementById('panda_button').innerText = "Equip";
    }
    else {
      document.getElementById('panda_button').disabled = true;
      document.getElementById('panda_button').innerText = "Equipped";
    }
  }

  else {
   
      document.getElementById('panda_button').disabled = true;
      document.getElementById('panda_button').innerText = "Unlock in The Egg";

   


  }


  if (bought_sun == true) {
    if (sun == false) {
      document.getElementById('sun_button').disabled = false;
      document.getElementById('sun_button').innerText = "Equip";
    }
    else {
      document.getElementById('sun_button').disabled = true;
      document.getElementById('sun_button').innerText = "Equipped";
    }
  }

  else {
   
      document.getElementById('sun_button').disabled = true;
      document.getElementById('sun_button').innerText = "Unlock in The Egg";

   


  }



  if (bought_water == true) {
    if (water == false) {
      document.getElementById('water_button').disabled = false;
      document.getElementById('water_button').innerText = "Equip";
    }
    else {
      document.getElementById('water_button').disabled = true;
      document.getElementById('water_button').innerText = "Equipped";
    }
  }

  else {
   
      document.getElementById('water_button').disabled = true;
      document.getElementById('water_button').innerText = "Unlock in The Egg";

   


  }



  if (bought_egg == true) {
    if (egg == false) {
      document.getElementById('egg_button').disabled = false;
      document.getElementById('egg_button').innerText = "Equip";
    }
    else {
      document.getElementById('egg_button').disabled = true;
      document.getElementById('egg_button').innerText = "Equipped";
    }
  }

  else {
   
      document.getElementById('egg_button').disabled = true;
      document.getElementById('egg_button').innerText = "Unlock in The Egg";

   


  }

   if (bought_clobear == true) {
    if (clobear == false) {
      document.getElementById('clobear_button').disabled = false;
      document.getElementById('clobear_button').innerText = "Equip";
    }
    else {
      document.getElementById('clobear_button').disabled = true;
      document.getElementById('clobear_button').innerText = "Equipped";
    }
  }

  else {
   
      document.getElementById('clobear_button').disabled = true;
      document.getElementById('clobear_button').innerText = "1/1000000 chance every second";

   


  }


  var thisRank = document.getElementById('thisRank')
  var nextRank = document.getElementById('nextRank')
  var prestige = document.getElementById('prestige')

  // You are currently Bronze Rank, with a 0% boost.
  // Prestige to reach Silver Rank, with an 11% boost.
  // Prestige to Silver Rank
  // Access prestige at 25,000 seconds
  // 0%, 11%, 25%, 43%, 67%, 100%

  if (rank == 'bronze') {
    thisRank.innerText = 'You are currently Bronze Rank, with a 0% boost.'
    nextRank.innerText = 'Prestige to reach Silver Rank, with an 11% boost.'

    prestige.setAttribute('onclick', "silver(); seconds = 0;");

    prestige.style.visibility = 'visible';



    if (seconds >= 25000) {
      prestige.innerHTML = 'Prestige to Silver Rank'
      prestige.disabled = false;
    }
    else {
      prestige.innerHTML = 'Access prestige at 25000 seconds'
      prestige.disabled = true;
    }

  }


  if (rank == 'silver') {
    thisRank.innerText = 'You are currently Silver Rank, with an 11% boost.'
    nextRank.innerText = 'Prestige to reach Gold Rank, with a 25% boost.'

    prestige.setAttribute('onclick', "gold(); seconds = 0;");

    prestige.style.visibility = 'visible';

    if (seconds >= 50000) {
      prestige.innerHTML = 'Prestige to Gold Rank'
      prestige.disabled = false;
    }
    else {
      prestige.innerHTML = 'Access prestige at 50000 seconds'
      prestige.disabled = true;
    }

  }


  if (rank == 'gold') {
    thisRank.innerText = 'You are currently Gold Rank, with a 25% boost.'
    nextRank.innerText = 'Prestige to reach Platinum Rank, with a 43% boost.'

    prestige.setAttribute('onclick', "platinum(); seconds = 0;");

    prestige.style.visibility = 'visible';


    if (seconds >= 100000) {
      prestige.innerHTML = 'Prestige to Platinum Rank'
      prestige.disabled = false;
    }
    else {
      prestige.innerHTML = 'Access prestige at 100000 seconds'
      prestige.disabled = true;
    }

  }


  if (rank == 'platinum') {
    thisRank.innerText = 'You are currently Platinum Rank, with a 43% boost.'
    nextRank.innerText = 'Prestige to reach Diamond Rank, with a 67% boost.'

    prestige.setAttribute('onclick', "diamond(); seconds = 0;");

    prestige.style.visibility = 'visible';

    if (seconds >= 250000) {
      prestige.innerHTML = 'Prestige to Diamond Rank'
      prestige.disabled = false;
    }
    else {
      prestige.innerHTML = 'Access prestige at 250000 seconds'
      prestige.disabled = true;
    }

  }


  if (rank == 'diamond') {
    thisRank.innerText = 'You are currently Diamond Rank, with a 67% boost.'
    nextRank.innerText = 'Prestige to reach Fur Rank, with a 100% boost.'

    prestige.setAttribute('onclick', "fur(); seconds = 0;");

    prestige.style.visibility = 'visible';

    if (seconds >= 1000000) {
      prestige.innerHTML = 'Prestige to Fur Rank'
      prestige.disabled = false;
    }
    else {
      prestige.innerHTML = 'Access prestige at 1000000 seconds'
      prestige.disabled = true;
    }

  }


  if (rank == 'fur') {
    thisRank.innerText = 'You are currently Fur Rank, with a 100% boost.'
    nextRank.innerText = 'You have reached the highest rank.'

    prestige.setAttribute('onclick', "");



    prestige.style.visibility = 'hidden';



  }


  var eggButton = document.getElementById('egg-button');

  if (isHatching == false) {
    if (seconds >= 1000) {
      eggButton.innerText = "Buy with 1000 seconds"
      eggButton.disabled = false;
    }
  else {
      eggButton.innerText = "Buy with 1000 seconds"
      eggButton.disabled = true;
    }
  }
  
  
  
  var backgroundButton = document.getElementById('background-button');


  if (slidePosition == 1) {
    backgroundButton.setAttribute('onclick', "background0();");


    if (current_background == 0) {
      backgroundButton.innerHTML = "Applied"
      backgroundButton.disabled = true;
    }
    else {
      backgroundButton.innerHTML = "Apply"
      backgroundButton.disabled = false;
    }





  }


  if (slidePosition == 2) {
    backgroundButton.setAttribute('onclick', "background1();");

    if (rank == 'silver' || rank == 'gold' || rank == 'platinum' || rank == 'diamond' || rank == 'fur') {
      if (current_background == 1) {
        backgroundButton.innerHTML = "Applied"
        backgroundButton.disabled = true;
      }
      else {
        backgroundButton.innerHTML = "Apply"
        backgroundButton.disabled = false;
      }


    }
    else {
      backgroundButton.innerHTML = "Unlock at Silver Rank"
      backgroundButton.disabled = true;
    }

  }



  //lbozo


  if (slidePosition == 3) {
    backgroundButton.setAttribute('onclick', "background2();");

    if (rank == 'gold' || rank == 'platinum' || rank == 'diamond' || rank == 'fur') {
      if (current_background == 2) {
        backgroundButton.innerHTML = "Applied"
        backgroundButton.disabled = true;
      }
      else {
        backgroundButton.innerHTML = "Apply"
        backgroundButton.disabled = false;
      }


    }
    else {
      backgroundButton.innerHTML = "Unlock at Gold Rank"
      backgroundButton.disabled = true;
    }

  }


  if (slidePosition == 4) {
    backgroundButton.setAttribute('onclick', "background3();");

    if (rank == 'platinum' || rank == 'diamond' || rank == 'fur') {
      if (current_background == 3) {
        backgroundButton.innerHTML = "Applied"
        backgroundButton.disabled = true;
      }
      else {
        backgroundButton.innerHTML = "Apply"
        backgroundButton.disabled = false;
      }


    }
    else {
      backgroundButton.innerHTML = "Unlock at Platinum Rank"
      backgroundButton.disabled = true;
    }

  }



  if (slidePosition == 5) {
    backgroundButton.setAttribute('onclick', "background4();");

    if (rank == 'diamond' || rank == 'fur') {
      if (current_background == 4) {
        backgroundButton.innerHTML = "Applied"
        backgroundButton.disabled = true;
      }
      else {
        backgroundButton.innerHTML = "Apply"
        backgroundButton.disabled = false;
      }


    }
    else {
      backgroundButton.innerHTML = "Unlock at Diamond Rank"
      backgroundButton.disabled = true;
    }

  }


  if (slidePosition == 6) {
    backgroundButton.setAttribute('onclick', "background5();");

    if (rank == 'fur') {
      if (current_background == 5) {
        backgroundButton.innerHTML = "Applied"
        backgroundButton.disabled = true;
      }
      else {
        backgroundButton.innerHTML = "Apply"
        backgroundButton.disabled = false;
      }


    }
    else {
      backgroundButton.innerHTML = "Unlock at Fur Rank"
      backgroundButton.disabled = true;
    }

  }

}

var eggContainer = document.getElementById('egg-container');
var isHatching = false;

function eggFunc() {
  seconds -= 1000
  isHatching = true
  eggContainer.innerHTML = ` <figure id="hatching-egg" class="image image-center hatch"
              style=" width:290px; margin-top: 20px;">
              <img src="assets/egg.png">
            </figure>`
  document.getElementById('hatching-egg').addEventListener("animationend", eggReveal);
  
}

//rizzler

function eggReveal() {
  var percentage = getRandomArbitrary(1,100)
  console.log(percentage)
  if (percentage == 1) {
    var secondaryPercentage = getRandomArbitrary(1,10)
    if (secondaryPercentage == 10) {
      eggContainer.innerHTML = ` <figure id="revealed-egg" class="image image-center zoom"
              style=" width:290px; margin-top: 20px;">
              <img src="assets/egg.png">
            </figure>`
      startEgg()
    }
    else {
      eggContainer.innerHTML = ` <figure id="revealed-egg" class="image image-center zoom"
              style=" width:290px; margin-top: 20px;">
              <img src="assets/water_bear.png">
            </figure>`
      startWater()
    }
    
  }
  else if (percentage >= 2 && percentage <= 3) {
    eggContainer.innerHTML = ` <figure id="revealed-egg" class="image image-center zoom"
              style=" width:290px; margin-top: 20px;">
              <img src="assets/sun_bear.png">
            </figure>`
    startSun()
  }
  else if (percentage >= 4 && percentage <= 6) {
    eggContainer.innerHTML = ` <figure id="revealed-egg" class="image image-center zoom"
              style=" width:390px; margin-top: 20px;">
              <img src="assets/panda_bear.png">
            </figure>`
    startPanda()
  }
   else if (percentage >= 7 && percentage <= 10) {
    eggContainer.innerHTML = `<span class="flex-center zoom" id="revealed-egg" style="margin-bottom:0px; padding-top: 140px;"> <p class="title" style="font-size: 35px">+10000 Highest Streak</p></span>`
     eggContainer.style.marginBottom = "20px";
     highest_streak += 10000
     localStorage.setItem("highest_streak", highest_streak);
     
  }
   else if (percentage >= 11 && percentage <= 20) {
    eggContainer.innerHTML = `<span class="flex-center zoom" id="revealed-egg" style="margin-bottom:0px; padding-top: 140px;"> <p class="title" style="font-size: 35px">+2500 Highest Streak</p></span>`
     eggContainer.style.marginBottom = "20px";
     highest_streak += 2500
     localStorage.setItem("highest_streak", highest_streak);
     
  }
  else if (percentage >= 21 && percentage <= 40) {
    eggContainer.innerHTML = `<span class="flex-center zoom" id="revealed-egg" style="margin-bottom:0px; padding-top: 140px;"> <p class="title" style="font-size: 35px">+1000 Highest Streak</p></span>`
     eggContainer.style.marginBottom = "20px";
     highest_streak += 1000
     localStorage.setItem("highest_streak", highest_streak);
     
  }
  else if (percentage >= 41 && percentage <= 70) {
    eggContainer.innerHTML = `<span class="flex-center zoom" id="revealed-egg" style="margin-bottom:0px; padding-top: 140px;"> <p class="title" style="font-size: 35px">Money Back</p></span>`
     eggContainer.style.marginBottom = "20px";
     seconds += 1000
     
  }
  else if (percentage >= 71 && percentage <= 100) {
    eggContainer.innerHTML = `<span class="flex-center zoom" id="revealed-egg" style="margin-bottom:0px; padding-top: 140px;"> <p class="title" style="font-size: 35px">Unlucky</p></span>`
     eggContainer.style.marginBottom = "20px";
  
     
  }
  document.getElementById('revealed-egg').addEventListener("animationend", eggEnd);

}

function eggEnd() {
  eggContainer.style.marginBottom = "0px";
  isHatching = false;
  eggContainer.innerHTML = ` <figure class="image image-center"
              style=" width:200px; margin-top: 20px;">
              <img src="assets/egg.png">
            </figure>
     
            <!-- The circles/dots -->
            <div style="text-align:center">
              <!--             <span class="dots" onclick="currentSlide(1)"></span>
            <span class="dots" onclick="currentSlide(2)"></span>
            <span class="dots" onclick="currentSlide(3)"></span>
            <span class="dots" onclick="currentSlide(4)"></span>
            <span class="dots" onclick="currentSlide(5)"></span> -->


              <div class="buttons">
                <button class="button is-primary is-medium is-fullwidth" style="margin-top: 30px;"
                  id="egg-button" onclick="eggFunc()"></button>
              </div>

            </div>`
  
}

function startDefault() {
  document.getElementById("image").src = "https://polarbearsupreme.mewtubelindor.repl.co/assets/polar_bear.png";
  document.getElementById('default_button').disabled = true;
  document.getElementById('default_button').innerText = "Equipped";
  localStorage.setItem("current_skin", "default");
  rainbow = false;
  rizz = false;
  koah = false;
  crown = false;
  defaults = true;
  fish = false;
  platypus = false;
  bee = false;
  pug = false;
  simeon = false;
  clobear = false;
  panda = false;
  sun = false;
  water = false;
  egg = false;


}



function startFish() {
  document.getElementById("image").src = "https://polarbearsupreme.mewtubelindor.repl.co/assets/polar_bear_fish.png";
  document.getElementById('fish_button').disabled = true;
  document.getElementById('fish_button').innerText = "Equipped";
  localStorage.setItem("current_skin", "fish");
  rainbow = false;
  rizz = false;
  koah = false;
  crown = false;
  fish = true;
  defaults = false;
  platypus = false;
  bee = false;
  pug = false;
  simeon = false;
  clobear = false;
  panda = false;
  sun = false;
  water = false;
  egg = false;


}

function startCrown() {
  document.getElementById("image").src = "https://polarbearsupreme.mewtubelindor.repl.co/assets/polar_bear_crown.png";
  document.getElementById('crown_button').disabled = true;
  document.getElementById('crown_button').innerText = "Equipped";

  localStorage.setItem("current_skin", "crown");
  rainbow = false;
  rizz = false;
  koah = false;
  crown = true;
  fish = false;
  defaults = false;
  platypus = false;
  bee = false;
  pug = false;
  simeon = false;
  clobear = false;
  panda = false;
  sun = false;
  water = false;
  egg = false;
}


function startRizz() {
  document.getElementById("image").src = "https://polarbearsupreme.mewtubelindor.repl.co/assets/rizzly_bear.png";
  document.getElementById('rizz_button').disabled = true;
  document.getElementById('rizz_button').innerText = "Equipped";

  localStorage.setItem("current_skin", "rizz");
  rainbow = false;
  rizz = true;
  koah = false;
  crown = false;
  fish = false;
  defaults = false;
  platypus = false;
  bee = false;
  pug = false;
  simeon = false;
  clobear = false;
}

function startKoah() {
  document.getElementById("image").src = "https://polarbearsupreme.mewtubelindor.repl.co/assets/koah.png";
  document.getElementById('koah_button').disabled = true;
  document.getElementById('koah_button').innerText = "Equipped";

  localStorage.setItem("current_skin", "koah");
  rainbow = false;
  rizz = false;
  koah = true;
  crown = false;
  fish = false;
  defaults = false;
  platypus = false;
  bee = false;
  pug = false;
  simeon = false;
  clobear = false;
}

function startPlatypus() {
  if (bought_platypus == false) {
    bought_platypus = true;
    localStorage.setItem('bought_platypus', true);
    seconds -= 100000;
  }


  document.getElementById("image").src = "https://polarbearsupreme.mewtubelindor.repl.co/assets/pretending_platypus.png";
  document.getElementById('platypus_button').disabled = true;
  document.getElementById('platypus_button').innerText = "Equipped";
  localStorage.setItem("current_skin", "platypus");
  rainbow = false;
  rizz = false;
  koah = false;
  crown = false;
  fish = false;
  defaults = false;
  platypus = true;
  bee = false;
  pug = false;
  simeon = false;
  clobear = false;
  panda = false;
  sun = false;
  water = false;
  egg = false;


}


function startBee() {
  if (bought_bee == false) {
    bought_bee = true;
    localStorage.setItem('bought_bee', true);
    seconds -= 250000;
  }


  document.getElementById("image").src = "https://polarbearsupreme.mewtubelindor.repl.co/assets/bee.png";
  document.getElementById('bee_button').disabled = true;
  document.getElementById('bee_button').innerText = "Equipped";
  localStorage.setItem("current_skin", "bee");
  rainbow = false;
  rizz = false;
  koah = false;
  crown = false;
  fish = false;
  defaults = false;
  platypus = false;
  bee = true;
  pug = false;
  simeon = false;
  clobear = false;
  panda = false;
  sun = false;
  water = false;
  egg = false;


}


function startPug() {
  if (bought_pug == false) {
    bought_pug = true;
    localStorage.setItem('bought_pug', true);
    seconds -= 500000;
  }


  document.getElementById("image").src = "https://polarbearsupreme.mewtubelindor.repl.co/assets/pug.png";
  document.getElementById('pug_button').disabled = true;
  document.getElementById('pug_button').innerText = "Equipped";
  localStorage.setItem("current_skin", "pug");
  rainbow = false;
  rizz = false;
  koah = false;
  crown = false;
  fish = false;
  defaults = false;
  platypus = false;
  bee = false;
  pug = true;
  simeon = false;
  clobear = false;
  panda = false;
  sun = false;
  water = false;
  egg = false;


}


function startSimeon() {
  if (bought_simeon == false) {
    bought_simeon = true;
    localStorage.setItem('bought_simeon', true);
    seconds -= 1000000;
  }


  document.getElementById("image").src = "https://polarbearsupreme.mewtubelindor.repl.co/assets/simeon_face.png";
  document.getElementById('simeon_button').disabled = true;
  document.getElementById('simeon_button').innerText = "Equipped";
  localStorage.setItem("current_skin", "simeon");
  rainbow = false;
  rizz = false;
  koah = false;
  crown = false;
  fish = false;
  defaults = false;
  platypus = false;
  bee = false;
  pug = false;
  simeon = true;
  clobear = false;
  panda = false;
  sun = false;
  water = false;
  egg = false;



}


function startClobear() {
  if (bought_clobear == false) {
    bought_clobear = true;
    localStorage.setItem('bought_clobear', true);

  }
 document.getElementById("small_question").innerText = "Clobear"
document.getElementById("big_question").innerHTML = `                     <figure class="image is-4by3">
                      <img src="assets/clobear.png" style=" margin-top: 20px; margin-bottom: 0px;">
                    </figure>`

  document.getElementById("image").src = "https://polarbearsupreme.mewtubelindor.repl.co/assets/clobear.png";
  document.getElementById('clobear_button').disabled = true;
  document.getElementById('clobear_button').innerText = "Equipped";
  localStorage.setItem("current_skin", "clobear");
  rainbow = false;
  rizz = false;
  koah = false;
  crown = false;
  fish = false;
  defaults = false;
  platypus = false;
  bee = false;
  pug = false;
  simeon = false;
  clobear = true;
  panda = false;
  sun = false;
  water = false;
  egg = false;



}

function startPanda() {
  if (bought_panda == false) {
    bought_panda = true;
    localStorage.setItem('bought_panda', true);
  }


  document.getElementById("image").src = "https://polarbearsupreme.mewtubelindor.repl.co/assets/panda_bear.png";
  document.getElementById('panda_button').disabled = true;
  document.getElementById('panda_button').innerText = "Equipped";
  localStorage.setItem("current_skin", "panda");
  rainbow = false;
  rizz = false;
  koah = false;
  crown = false;
  fish = false;
  defaults = false;
  platypus = false;
  bee = false;
  pug = false;
  simeon = false;
  clobear = false;
  panda = true;
  sun = false;
  water = false;
  egg = false;



}


function startSun() {
  if (bought_sun == false) {
    bought_sun = true;
    localStorage.setItem('bought_sun', true);

  }


  document.getElementById("image").src = "https://polarbearsupreme.mewtubelindor.repl.co/assets/sun_bear.png";
  document.getElementById('sun_button').disabled = true;
  document.getElementById('sun_button').innerText = "Equipped";
  localStorage.setItem("current_skin", "sun");
  rainbow = false;
  rizz = false;
  koah = false;
  crown = false;
  fish = false;
  defaults = false;
  platypus = false;
  bee = false;
  pug = false;
  simeon = false;
  clobear = false;
  panda = false;
  sun = true;
  water = false;
  egg = false;



}


function startWater() {
  if (bought_water == false) {
    bought_water = true;
    localStorage.setItem('bought_water', true);

  }


  document.getElementById("image").src = "https://polarbearsupreme.mewtubelindor.repl.co/assets/water_bear.png";
  document.getElementById('water_button').disabled = true;
  document.getElementById('water_button').innerText = "Equipped";
  localStorage.setItem("current_skin", "water");
  rainbow = false;
  rizz = false;
  koah = false;
  crown = false;
  fish = false;
  defaults = false;
  platypus = false;
  bee = false;
  pug = false;
  simeon = false;
  clobear = false;
  panda = false;
  sun = false;
  water = true;
  egg = false;



}


function startEgg() {
  if (bought_egg == false) {
    bought_egg = true;
    localStorage.setItem('bought_egg', true);

  }


  document.getElementById("image").src = "https://polarbearsupreme.mewtubelindor.repl.co/assets/egg.png";
  document.getElementById('egg_button').disabled = true;
  document.getElementById('egg_button').innerText = "Equipped";
  localStorage.setItem("current_skin", "egg");
  rainbow = false;
  rizz = false;
  koah = false;
  crown = false;
  fish = false;
  defaults = false;
  platypus = false;
  bee = false;
  pug = false;
  simeon = false;
  clobear = false;
  panda = false;
  sun = false;
  water = false;
  egg = true;



}




incrementSeconds();
statusFunc();

var cancel = setInterval(incrementSeconds, 1000);

var cancelTwo = setInterval(statusFunc, 10);

function displayNextImage(id) {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById(id).src = images[x];
}

function displayPreviousImage(id) {
  x = (x <= 0) ? images.length - 1 : x - 1;
  document.getElementById(id).src = images[x];
}

function startTimer() {
  document.getElementById("image").src = "https://polarbearsupreme.mewtubelindor.repl.co/assets/polar_bear_purple.png";
  interval = setInterval(displayNextImage, 3000, "image");
  document.getElementById("image").classList.add("fade");

  document.getElementById('rainbow_button').disabled = true;
  document.getElementById('rainbow_button').innerText = "Equipped";

  localStorage.setItem("current_skin", "rainbow");
  rainbow = true;
  rizz = false;
  koah = false;
  crown = false;
  fish = false;
  defaults = false;
  platypus = false;
  bee = false;
  pug = false;
  simeon = false;
  clobear = false;
}

var images = [], x = -1;
images[0] = "https://polarbearsupreme.mewtubelindor.repl.co/assets/polar_bear_red.png";
images[1] = "https://polarbearsupreme.mewtubelindor.repl.co/assets/polar_bear_green.png";
images[2] = "https://polarbearsupreme.mewtubelindor.repl.co/assets/polar_bear_blue.png";
images[3] = "https://polarbearsupreme.mewtubelindor.repl.co/assets/polar_bear_purple.png";




// startTimer()

var rank = 'bronze';

if (localStorage.getItem('rank') == 'silver') {
  silver();
}
if (localStorage.getItem('rank') == 'gold') {
  gold();
}
if (localStorage.getItem('rank') == 'platinum') {
  platinum();
}
if (localStorage.getItem('rank') == 'diamond') {
  diamond();
}
if (localStorage.getItem('rank') == 'fur') {
  fur();
}



function bronze() {

  localStorage.setItem('rank', 'bronze');
  rank = 'bronze';
  localStorage.setItem('bronze', true);
  clearInterval(cancel);
  cancel = setInterval(incrementSeconds, 1000);
  document.getElementById('trophy').src = 'assets/bronze_trophy.png';
  document.getElementById('rank1').classList.add('is-link');
  document.getElementById('rank2').classList.remove('is-link');
  document.getElementById('rank3').classList.remove('is-link');
  document.getElementById('rank4').classList.remove('is-link');
  document.getElementById('rank5').classList.remove('is-link');
  document.getElementById('rank6').classList.remove('is-link');
}

function silver() {

  localStorage.setItem('rank', 'silver');
  rank = 'silver';
  localStorage.setItem('silver', true);
  clearInterval(cancel);
  cancel = setInterval(incrementSeconds, 900);
  document.getElementById('trophy').src = 'assets/silver_trophy.png';
  document.getElementById('rank1').classList.remove('is-link');
  document.getElementById('rank2').classList.add('is-link');
  document.getElementById('rank3').classList.remove('is-link');
  document.getElementById('rank4').classList.remove('is-link');
  document.getElementById('rank5').classList.remove('is-link');
  document.getElementById('rank6').classList.remove('is-link');
}

function gold() {

  localStorage.setItem('rank', 'gold');
  rank = 'gold';
  localStorage.setItem('gold', true);
  clearInterval(cancel);
  cancel = setInterval(incrementSeconds, 800);
  document.getElementById('trophy').src = 'assets/gold_trophy.png';
  document.getElementById('rank1').classList.remove('is-link');
  document.getElementById('rank2').classList.remove('is-link');
  document.getElementById('rank3').classList.add('is-link');
  document.getElementById('rank4').classList.remove('is-link');
  document.getElementById('rank5').classList.remove('is-link');
  document.getElementById('rank6').classList.remove('is-link');
}

function platinum() {

  localStorage.setItem('rank', 'platinum');
  rank = 'platinum';
  localStorage.setItem('platinum', true);
  clearInterval(cancel);
  cancel = setInterval(incrementSeconds, 700);
  document.getElementById('trophy').src = 'assets/platinum_trophy.png';
  document.getElementById('rank1').classList.remove('is-link');
  document.getElementById('rank2').classList.remove('is-link');
  document.getElementById('rank3').classList.remove('is-link');
  document.getElementById('rank4').classList.add('is-link');
  document.getElementById('rank5').classList.remove('is-link');
  document.getElementById('rank6').classList.remove('is-link');
}

function diamond() {

  localStorage.setItem('rank', 'diamond');
  rank = 'diamond';
  localStorage.setItem('diamond', true);
  clearInterval(cancel);
  cancel = setInterval(incrementSeconds, 600);
  document.getElementById('trophy').src = 'assets/diamond_trophy.png';
  document.getElementById('rank1').classList.remove('is-link');
  document.getElementById('rank2').classList.remove('is-link');
  document.getElementById('rank3').classList.remove('is-link');
  document.getElementById('rank4').classList.remove('is-link');
  document.getElementById('rank5').classList.add('is-link');
  document.getElementById('rank6').classList.remove('is-link');
}


function fur() {

  localStorage.setItem('rank', 'fur');
  rank = 'fur';
  localStorage.setItem('fur', true);
  clearInterval(cancel);
  cancel = setInterval(incrementSeconds, 500);
  document.getElementById('trophy').src = 'assets/fur_trophy.png';
  document.getElementById('rank1').classList.remove('is-link');
  document.getElementById('rank2').classList.remove('is-link');
  document.getElementById('rank3').classList.remove('is-link');
  document.getElementById('rank4').classList.remove('is-link');
  document.getElementById('rank5').classList.remove('is-link');
  document.getElementById('rank6').classList.add('is-link');
}



function background0() {
  document.getElementsByTagName("body")[0].style.backgroundImage = "url('assets/background-#.png')"
  document.getElementsByClassName("line")[0].style.color = "black";
  var lines = document.getElementsByClassName("line");
  for (var i = 0, il = lines.length; i < il; i++) {
    lines[i].style.color = 'black';
  }
  document.getElementById('seconds-counter').style.color = 'black';
  document.getElementById('status').style.color = 'black';
  document.getElementsByClassName('tooltip')[0].style.borderColor = 'black';
  document.getElementsByClassName('tooltip2')[0].style.borderColor = 'black';
  current_background = 0
  localStorage.setItem('current_background', 0);
}



//backgrounds
function background1() {
  document.getElementsByTagName("body")[0].style.backgroundImage = "url('assets/background-1.png')"
  document.getElementsByClassName("line")[0].style.color = "black";
  var lines = document.getElementsByClassName("line");
  for (var i = 0, il = lines.length; i < il; i++) {
    lines[i].style.color = 'black';
  }
  document.getElementById('seconds-counter').style.color = 'black';
  document.getElementById('status').style.color = 'black';
  document.getElementsByClassName('tooltip')[0].style.borderColor = 'black';
  document.getElementsByClassName('tooltip2')[0].style.borderColor = 'black';

  current_background = 1
  localStorage.setItem('current_background', 1);

}



function background2() {
  document.getElementsByTagName("body")[0].style.backgroundImage = "url('assets/background-2.jpg')"
  var lines = document.getElementsByClassName("line");
  for (var i = 0, il = lines.length; i < il; i++) {
    lines[i].style.color = 'white';
  }
  document.getElementById('seconds-counter').style.color = 'white';
  document.getElementById('status').style.color = 'white';
  document.getElementsByClassName('tooltip')[0].style.borderColor = 'white';
  document.getElementsByClassName('tooltip2')[0].style.borderColor = 'white';

  current_background = 2
  localStorage.setItem('current_background', 2);
}


function background3() {
  document.getElementsByTagName("body")[0].style.backgroundImage = "url('assets/background-3.jpg')"
  var lines = document.getElementsByClassName("line");
  for (var i = 0, il = lines.length; i < il; i++) {
    lines[i].style.color = 'white';
  }
  document.getElementById('seconds-counter').style.color = 'white';
  document.getElementById('status').style.color = 'white';
  document.getElementsByClassName('tooltip')[0].style.borderColor = 'white';
  document.getElementsByClassName('tooltip2')[0].style.borderColor = 'white';

  current_background = 3
  localStorage.setItem('current_background', 3);
}


function background4() {
  document.getElementsByTagName("body")[0].style.backgroundImage = "url('assets/background-4.jpeg')"
  var lines = document.getElementsByClassName("line");
  for (var i = 0, il = lines.length; i < il; i++) {
    lines[i].style.color = 'white';
  }
  document.getElementById('seconds-counter').style.color = 'white';
  document.getElementById('status').style.color = 'white';
  document.getElementsByClassName('tooltip')[0].style.borderColor = 'white';
  document.getElementsByClassName('tooltip2')[0].style.borderColor = 'white';
  current_background = 4
  localStorage.setItem('current_background', 4);
}



function background5() {
  document.getElementsByTagName("body")[0].style.backgroundImage = "url('assets/background-5.png')"
  var lines = document.getElementsByClassName("line");
  for (var i = 0, il = lines.length; i < il; i++) {
    lines[i].style.color = 'black';
  }
  document.getElementById('seconds-counter').style.color = 'black';
  document.getElementById('status').style.color = 'black';
  document.getElementsByClassName('tooltip')[0].style.borderColor = 'black';
  document.getElementsByClassName('tooltip2')[0].style.borderColor = 'black';
  current_background = 5
  localStorage.setItem('current_background', 5);
}

if (localStorage.getItem("negative") == 'true') {
  secondsSubtract();
}