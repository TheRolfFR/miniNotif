let miniNotif = {
	i: 0,
	miniNotifElement: undefined,
	//init
	init: function(obj = undefined){
		if(typeof(obj) == 'string') {
			try {
				obj = document.querySelector(obj);
			} catch(e) {
				obj = undefined;
			}
		}
		if(obj == undefined) {
			document.body.appendHTML('<div id="miniNotif"></div>');
			obj = document.body.lastElementChild;
		}
		this.miniNotifElement = obj;
	},
	
	//add notif
	addNotif: function(parameters) {
		// see if required parameter not empty
		if(!('text' in parameters)) {
			console.error('miniNotif error: text option required');
			return undefined;
		}

		// default options
		let options = {
			process: true,
			text: '',
			icon: '',
			color: '',
			background: '',
			fadeinduration: 300,
			visibleduration: 200
		};

		// reconfigure options
		for(let key in parameters) {
			options[key] = parameters[key];
		}

		console.log(options);

		// add the notif
		this.miniNotifElement.appendHTML('<div class="miniNotif" id="mn' + this.i + '" style="color: ' + options.color + '; background: ' + options.background + '"><div><span class="icon">' + options.icon + '</span>' + options.text + '</div></div>');
		let notif = this.miniNotifElement.lastElementChild;
		
		// animate the notif
		notif.animate('opacity', 0, 1, options.fadeinduration + 'ms');
		
		this.i++;
		setTimeout(function() {
			//then i proccess my notif according to the proccessOrNot parameter
			if(!options.process) {
				return notif;
			} else {
				// get out
				miniNotif.done(notif);
			}
		}, options.fadeinduration +options.visibleduration);
		return null;
	},
	
	// proccess function
	done: function(notif) {
		notif.animate('right', '0px', '-500px', '300ms', function(){
			notif.animate('height', notif.offsetHeight+'px', 0, '300ms', function(){
				notif.style.display = 'none';
			});
		});
	}
}

// js extension
Element.prototype.appendHTML = function(str) {
  let div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    this.appendChild(div.children[0]);
  }
}

// my personal pure js animate function
Element.prototype.animate = function(property, start, end, duration, callback = undefined) {
	let that = this;
	duration = parseInt(duration);
	const steps = duration/10;
	const unit = start.toString().replace(/\d+/g, '') || end.toString().replace(/\d+/g, '');
	const change = (parseFloat(end) - parseFloat(start))/steps;
	
	// animate
	that.style[property] = start;
	let interval = setInterval(function(){
		that.style[property] = parseFloat(that.style[property]) + change + unit;
	}, 10);
	setTimeout(function() {
		that.style[property] = parseFloat(end) + unit;
		clearInterval(interval);
		if(callback != undefined) {
			callback(that);
		}
	}, duration);
}