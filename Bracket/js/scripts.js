function createMatch(players, count) {
	var rounds = 1;
	var p = players;
	var matches = p/2;
	var iDiv;
	var style;
	var pixels = 1920/count;
	
	
	while(matches >= 1){
		
		iDiv = document.createElement('div');
		iDiv.id = 'round' + rounds.toString();
		iDiv.className = 'round' + rounds.toString();
		
		style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = '.round' + rounds.toString() + '{}';//MARGIN??
		document.getElementsByTagName('head')[0].appendChild(style);
		
		document.getElementsByTagName('body')[0].appendChild(iDiv);
	
		for(var i=0; i<matches; i++){
			var match = document.createElement("BUTTON");
			document.body.appendChild(match);
			var text = document.createTextNode("Matchaki");
			match.appendChild(text);
			document.body.appendChild(match);
			
			document.getElementById('round' + rounds.toString()).appendChild(match);
		}
		
		rounds++;
		matches = matches/2;
		
	}
	

}

function refresh(){
	location.reload();
}
