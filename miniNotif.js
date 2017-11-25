var miniNotif = {
	//init
	init: function(){
    if(!$('#miniNotif').length) {
        $('body').append('<div id="miniNotif"></div>');
    }
	},
	
	//add notif
	addNotif: function(proccessOrNot, text, icon = '', color ='') {
		var fontcolor = 'black' || color; // default color is white
		
		var notif = '';
		notif = $('<div class="miniNotif" style="color: ' + fontcolor + '"><div class="icon">' + icon + '</div><div> ' + text + '</div></div>').appendTo('body #miniNotif').css('opacity', '0').animate({ opacity: '1' }, 300).delay(500);
		
		//then i proccess my notif according to thee var
		if(!proccessOrNot) {
			return notif;
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
