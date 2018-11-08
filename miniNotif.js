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
		
		document.getElementById('miniNotif').innerHTML += '<div class="miniNotif" id="mn' + this.i + '" style="color: ' + fontcolor + '"><div class="icon">' + icon + '</div><div> ' + text + '</div></div>';
		
		var notif = document.querySelector('#miniNotif .miniNotif#mn' + this.i);
		notif.style.opacity = 0;
		
		// animate notif
		notif.animate('opacity', 0, 1, 300);
		
		this.i++;
		setTimeout(function() {
			//then i proccess my notif according to thee var
			if(!proccessOrNot) {
				return notif;
			} else {
				// get out
				miniNotif.done(notif);
			}
		}, 500);
		return null;
	},
	
	// proccess function
	done: function(notif) {
		notif.animate('right', '0px', '-500px', 300, function(){
			notif.animate('height', notif.offsetHeight+'px', 0, 300);
		});
	}
}

// function to animate
Element.prototype.animate = function(property, start, end, duration, callback = undefined) {
	let that = this;
	
	const steps = duration/10;
	const unit = start.toString().replace(/\d+/g, '') || end.toString().replace(/\d+/g, '');
	const change = (parseFloat(end) - parseFloat(start))/steps;
	
	// animate
	that.style[property] = start;
	let time = 0;
	let interval = setInterval(function(){
		that.style[property] = parseFloat(that.style[property]) + change + unit;
		time += 10;
		if(time > duration) {
			clearInterval(interval);
			if(callback != undefined) {
				callback(that);
			}
		}
	}, 10);
}
