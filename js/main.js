function reveal() {
	var coll = document.getElementsByClassName("collapsible");
	var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
	
}

'use strict';
$(function() {
	var width = $( document ).width()/2.256;
	var animationSpeed = 450;
	var pause = 3000;
	var currentSlide = 1;
	var interval;
	
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	
	$(".next").click(function() {
		if (currentSlide < 5){
		++currentSlide;
		$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
		});
	}	
		
	});
	
	$(".prev").click(function() {
		
		if (currentSlide > 1){
		--currentSlide;
		$slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function(){
		});
	}
		
	});
	
	
	
	//~ function startSlider(){
		//~ interval = setInterval(function() {
		//~ $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
			//~ currentSlide++;
			//~ if(currentSlide === $slides.length-1) {
				//~ stopSlider();
				//~ currentSlide = 1;
				//~ $slideContainer.css('margin-left', 0);
			//~ }
		//~ });
	//~ }, pause);
	//~ }
	
	//~ function stopSlider() {
		//~ clearInterval(interval);
	//~ }
	
	//~ $slider.on('mouseenter', stopSlider).on('mouseleave',startSlider);
	
	//~ startSlider();
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides2 = document.getElementsByClassName("slides2");
  var dots = document.getElementsByClassName("dot");
  if (n > slides2.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides2[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
} 