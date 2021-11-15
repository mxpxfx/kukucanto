// JavaScript Document
$(document).ready(function(){
		
		/*если навесити указатель на кнопку на карте*/
		$('.mapbutton').hover(function(){
		  /*пишем в блоке test содержание поля data-map-item у ссылки */ 
		  $( ".test" ).html($(this).data("map-test"));
        	});
	
		  /*когда курсор ухордит от ссылки, пишем в блок test значок триграммы <h6>☲</h6>*/
          $('.mapbutton').mouseout(function(){			
		   $( ".test" ).html("");
        	});	
	
		/*если нажать на кнопку на карте*/
        $('.mapbutton').click(function(){
			/*сначала закрываем все возможые окна*/
			$( '.popup').hide();
		  /*показываем тот блок, имя которого записано у ссылки в поле data-map-item*/ 
		  $( '.'+$(this).data("map-item") ).slideToggle(300);
			
		  /*пишем в блоке test содержание поля data-map-item у ссылки */ 
		  $( ".test" ).html($(this).data("map-test"));
			
		   /*ставим в блоке myflag содержание поля data-flag значение open 
			$(".myflag").data("flag",1);*/
			//alert ($(".myflag").data("flag"));
		    //$( ".myflag" ).html("open");
		
		  /*если кликнут на кнопке дальше не даем событию всплывать вверх
		  // !!! тут проблема, что такие клики не будут считаться другими ловцами событий, напимер в Метрике !!!
    		event.stopPropagation();*/
			
        	});
			
			/*закрывание окна нажатим на крестик*/
			$('.close').click(function(){
				$( '.popup').hide();
			});
			/*остановка видео в открытке нажатим на крестик*/
			$('.pcstop').click(function(){
				//$( '#pc01' ).attr( 'src', function ( i, val ) { return val; });
				$('#'+$(this).data("postcard")).attr( 'src', function ( i, val ) { return val; });
			});
	
	
		/*если кликнут где-то на странице, закрываем окна .popup
		$(window).click(function() {
			//если flag равен 1 то надо закрыть окна
			if($(".myflag").data("flag")) {
			//Hide the menus if visible
			$( '.popup').hide();
			}
		});*/
	
	
		if(window.matchMedia('(max-width: 575px)').matches) {
		// будет выполнено для всех значений  до 575px включительно
		$( '.test').hide(); //на маленьких экранах не показываем блок с подсказками
			}
});
