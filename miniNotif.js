var miniNotif = {
	i: 0,
	//init
	init: function(){
    if(!$('#miniNotif').length) {
        $('body').append('<div id="miniNotif"></div>');
    }
	},
	
	//add notif
	addNotif: function(proccessOrNot, text, icon = '', fontcolor ='black') {
		// default color is black
		
		$('body #miniNotif').append('<div class="miniNotif" id="' + this.i + '" style="color: ' + fontcolor + '"><div class="icon">' + icon + '</div><div> ' + text + '</div></div>');
		
		var notif = $('#miniNotif .miniNotif#' + this.i);
		notif.css('opacity', '0').animate({ opacity: '1' }, 300).delay(1000);
		this.i++;
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
