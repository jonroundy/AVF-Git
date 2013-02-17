//Inject CSS file on load and orientation change

function orient() {
	if (Math.abs(window.orientation) == 90) {
		$("#orientation").each(function(){
	  	$(this).attr('href','css/landscape.css');		
	  });
	}
	else { 
		$("#orientation").each(function(){
	  	$(this).attr('href','css/landscape.css');		
	  }); 
	}
};

$(window).on('ready', function(){
	orient();
});

$(window).on('orientationchange', function(){
	orient();
});