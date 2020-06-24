// ASH MOHSENI
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 900
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 900,
    delay: 200
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=975',
    delay: (el, i) => 34 * (i+1),
  }).add({
    targets: '.ml11',
    opacity: 1,
  })
  .add({
    targets: '.line',
    // delay: 50,
    opacity:0
  });


// JUNIOR DEVELOPER
var textWrapper = document.querySelector('.ml12 .letters2');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter2'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml12 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    delay: 1000,
    duration: 900
  })
  .add({
    targets: '.ml12 .line',
    translateX: [0, document.querySelector('.ml12 .letters2').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 900,
    delay: 100
  }).add({
    targets: '.ml12 .letter2',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=975',
    delay: (el, i) => 34 * (i+1),
  }).add({
    targets: '.ml12',
    opacity: 1,
  })
  .add({
    targets: '.line',
    // delay: 50,
    opacity:0
  });



  // TO BRING THE NAVBAR
  $(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 400);
  });
