$(document).ready(function(){
  $('.bxslider').bxSlider({
	  auto: false,
	  controls: false,
	  pager: false,
	  speed: 4000
	});

	
	$('#liquid').liquidcarousel({
		height: 400,		//the height of the list
		duration: 500,		//the duration of the animation
		hidearrows: true	//hide arrows if all of the list items are visible
	});

	$('.arrow-slider').click(
		function pageScroll()
		{
			$('html, body').animate({
				scrollTop: $("#kolekcja").offset().top
			}, 1500);
		}
	)
	
	
	$('.arrow-contact').click(
		function()
		{ 
			$("#quick-message").stop().animate({right: -1000}, 500, function(){ $("#social").animate({right:0} ,500); }); 
		}
	);
	
	$('.social-icon-click').click(
		function()
		{ 
			$("#social").stop().animate({right: -200}, 500, function(){ $("#quick-message").animate({right:0} ,500); }); 
		}
	);
	
	
	if ($(window).width() >= 1000) {
		$(".menu_L1 li").hover
		(		
			function()
			{
				$(this).children("ul").fadeIn();
			},
			function()
			{
				$(this).children("ul").fadeOut();
			}
		);
	}

	if ($(window).width() < 1000) {
		$(".menu_L1 li").click
		(		
			function()
			{
				if ($(this).children("ul").hasClass( "otwarte_menu_kat" ))
				{
					$(this).children(".otwarte_menu_kat").removeClass("otwarte_menu_kat");
					$(this).children("ul").slideUp();
				}
				else
				{
					$(this).children("ul").slideDown();
					
					$(this).children("ul").addClass("otwarte_menu_kat");
				}
			}
		);
	}
	
	
	
	
	$(".menu_L1 li").click
	(
		function()
		{
			$(".menu_L1 li").removeClass('active');
			$(this).addClass('active');	
		}
	);
	$(".menu_L2 li").click
	(
		function()
		{
			$(this).addClass('active');
			//$(".menu_L2 li").removeClass('active');
			
			console.log($(this));
		}
	);
	$(".menu_mini_img").click
	(
		
		function()
		{
			if ($( ".menu" ).hasClass( "otwarte_menu_top" ))
			{
				$(".otwarte_menu_top").removeClass("otwarte_menu_top");
				$(".menu").stop().slideUp("slow");
			}
			else
			{
				$(".menu").stop().slideDown("slow");
				$(".menu").addClass("otwarte_menu_top");
			}
		}
	);

	
	
	
	
});

$(window).load(function() {
	$(".ikona_flaga").click( function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
	});
	$(".ikona_socialka").click( function(){
		$(".active").removeClass("active");
		$(this).addClass("active");
	});
	
});


$(window).resize(function(){

});

