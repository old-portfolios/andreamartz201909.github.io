$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  let typed = new Typed(".typed", {
    strings: ["Web Developer.", "Skill #2.", "Lifelong Learner."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

});


