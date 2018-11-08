var miniNotif = {
	i: 0,
	//init
	init: function(){
	    if(document.getElementById('mininotif') == undefined) {
		document.body.innerHTML += '<div id="miniNotif"></div>';
	    }
	},
	
	//add notif
	addNotif: function(proccessOrNot, text, icon = '', fontcolor ='black') {
		// default color is black
		
		document.getElementById('miniNotif').innerHTML += '<div class="miniNotif" id="' + this.i + '" style="color: ' + fontcolor + '"><div class="icon">' + icon + '</div><div> ' + text + '</div></div>';
		
		var notif = document.querySelector('#miniNotif .miniNotif#' + this.i);
		notif.style.opacity = 0;
		
		// animate notif
		const animationTime = 300;
		const interval = setInterval(function(){
			notif.style.opacity += 10/animationTime;
		}, 10);
		setTimeout(function() { clearInterval(interval) }, 300);
		
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
		
		const animationTime = 300;
		let interval = setInterval(function(){
			notif.style.right = parseInt(notif.style.right) - 5000/animationTime + 'px';
		}, 10);
		setTimeout(function() {
			clearInterval(interval);
			const initialHeight = notif.offsetHeight;
			notif.style.height = initialHeight + 'px';
			interval = setInterval(function(){
				notif.style.height = parseInt(notif.style.height) - 10*initialHeight/animationTime;
			}, 10);
			setTimeout(function() { clearInterval(interval) }, 300);
		}, 300);
	}
}
