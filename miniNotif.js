var miniNotif = {
	i: 0,
	//init
	init: function(){
    if(!$('#miniNotif').length) {
        $('body').append('<div id="miniNotif"></div>');
    }
	},
	
	//add notif
	addNotif: function(proccessOrNot, text, icon = '', color ='') {
		var fontcolor = 'black' || color; // default color is white
		
		$('body #miniNotif').append('<div class="miniNotif" id="' + i + '" style="color: ' + fontcolor + '"><div class="icon">' + icon + '</div><div> ' + text + '</div></div>');
		$('#miniNotif .miniNotif#' + i).css('opacity', '0').animate({ opacity: '1' }, 300).delay(500);
		console.log(notif);
		//then i proccess my notif according to thee var
		if(!proccessOrNot) {
			return $('#miniNotif .miniNotif#' + i);
		} else {
			// get out
			miniNotif.done(notif);
		}
	},
	
	// proccess function
	done: function(notif) {
			notif.animate({
					right: '-500px',
			}, 300).delay(300).slideUp(300);
	}
}
