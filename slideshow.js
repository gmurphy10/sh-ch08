// display first slide
var currentSlide = 0

// here we set how many slides we have using the .length property
var totalSlides = $('.holder div').length

var moveSlide = function (slide) {
  // turn currentSlide value into a negative vw unit
  // here we add the 'vw' unit onto the end
  var leftPosition = -slide * 100 + 'vw'
  // grab holder & change to 2nd slide
  $('.holder').css('left', leftPosition)

  var slideNumber = slide + 1
  // set the text for the steps using currentSlide and total number
  $('.steps').text(slideNumber + ' / ' + totalSlides)
}

// 1. function to take us to the next slide
var nextSlide = function () {
  // increment our currentSlide, reassigning & incrementing by 1
  currentSlide = currentSlide + 1

  if (currentSlide >= totalSlides) {
    currentSlide = 0
  }

  moveSlide(currentSlide)
}

// 2. function that takes us to the previous slide

var previousSlide = function () {
  // decrementing the currentSlide value
  currentSlide = currentSlide - 1

  // if our currentSlide is less than 0, set our currentSlide to last one.
  if (currentSlide < 0) {
    // subtract 1 from our currentSlide as we are using the array index
    currentSlide = totalSlides - 1
  }

  moveSlide(currentSlide)
}

// setInterval allows us to run a function every x amount of time
var autoSlide = setInterval(function () {
  // nextSlide function will be run
  nextSlide()
  // runs every 3s (3000ms)
}, 3000)

// we also have setTimeout, which is the same, but runs only once

$('.next').on('click', function () {
  // cancel our autoSlide interval function
  // as the user has taken over control of the slideshow
  clearInterval(autoSlide)
  // here we call the nextSlide function and go to the next slide
  nextSlide()
})

$('.prev').on('click', function () {
  clearInterval(autoSlide)
  previousSlide()
})

// here we set a slideNumber variable which increments by 1 because
// our array starts at 0
var slideNumber = currentSlide + 1
// here we set the text for the steps using currentSlide and total nubmer
$('.steps').text(slideNumber + ' / ' + totalSlides)
