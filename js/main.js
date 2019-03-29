//~ $(document).ready(function() {
                
                //~ var documentEl = $(document),
                    //~ fadeElem = $('.row');
                
                
                //~ documentEl.on('scroll', function() {
                    //~ var currScrollPos = documentEl.scrollTop();
                    
                    //~ fadeElem.each(function() {
                        //~ var $this = $(this),
                            //~ elemOffsetTop = $this.offset().top;
                        //~ if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/400);
                    //~ }); 
                //~ });
                
//~ });
        
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
	var width = $( document ).width()/2.24;
	var animationSpeed = 550;
	var pause = 0;
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
			--currentSlide;
		
		if (currentSlide >= 1){
	
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
				currentSlide = 1;
				$slideContainer.css('margin-left', 0);
			//~ }
		//~ });
	//~ }, pause);
	//~ }
	
	//~ function stopSlider() {
		//~ clearInterval(interval);
	//~ }
	
	//~ $slider.on('mouseenter', stopSlider).on('mouseleave',startSlider);
	
	//~ //startSlider();
});

