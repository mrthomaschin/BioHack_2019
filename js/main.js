    $(document).ready(function() {
                
                var documentEl = $(document),
                    fadeElem = $('.row');
                
                
                documentEl.on('scroll', function() {
                    var currScrollPos = documentEl.scrollTop();
                    
                    fadeElem.each(function() {
                        var $this = $(this),
                            elemOffsetTop = $this.offset().top;
                        if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/400);
                    }); 
                });
                
            });
        


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


