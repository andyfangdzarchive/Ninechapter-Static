jQuery(function($){

	//region colorbox
	if($.fn.colorbox){

		var $d = $(document),
			$w = $(window),
			$colorboxLinks = $('.pi-colorbox'),
			//Breakpoints could be 3xs, 2xs, xs, sm, md, lg
			breakpoints = [
				'sm',
				'md',
				'lg'
			],
			colorboxState = 0,
			colorboxNeeded = 0;


		function piColorboxInit(){

			colorboxNeeded = 0;

			for(var i in breakpoints){
				if(breakpoints[i] == window.piCurrentBound){
					colorboxNeeded = 1;
					break;
				}
			}

			if(colorboxNeeded && !colorboxState){
				$colorboxLinks.each(function(){
					var $el = $(this),
						groupFromData = $el.data('colorboxGroup'),
						group = groupFromData ? groupFromData : 'pi-group';
					$el.colorbox({rel:group});
				});
				colorboxState = 1;
			} else if(!colorboxNeeded && colorboxState) {
				$colorboxLinks.colorbox.remove();
				colorboxState = 0;
			}
		}

		$d.bind('piBoundChanged', piColorboxInit);
		piColorboxInit();

	}
	//endregion

});