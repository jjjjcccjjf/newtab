$(document).ready(function() {

	setInterval(function(){

	    var now = new Date();
	    var start = new Date(now.getFullYear(), 0, 0);
	    var diff = now - start;
	    var oneDay = 1000 * 60 * 60 * 24;
	    var day = Math.floor(diff / oneDay);
	    var progress = ((day / 365) * 100).toFixed(2);
	    
	    var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!
		var hour = today.getHours(); //January is 0!
		var min = today.getMinutes(); //January is 0!
		var yyyy = today.getFullYear();

		if (dd < 10) {
	  		dd = '0' + dd;
		}

		if (mm < 10) {
		  mm = '0' + mm;
		}

		if (min < 10) {
		  min = '0' + min;
		}

		if (hour < 10) {
		  hour = '0' + hour;
		}

		var concatted = yyyy + "-" + mm + "-" + dd;
		
	    var d = new Date(concatted + " " + hour + ":" + min +":00");
	    var d2 = new Date(concatted + " 18:00:00");
	    var d3 = new Date(concatted + " 23:59:59");
	    var diffy = Math.abs(d2 - d) / 36e5;
	    var day_progress = Math.abs(((diffy / 9) * 100) - 100).toFixed(2);

	    var dayyy = Math.abs(d3 - d) / 36e5;
	    var dayy = Math.abs(((dayyy / 24) * 100) - 100).toFixed(2);


	    $('#timenow').text(moment().format('MMM D, YYYY h:mm:ss a'));
	    $('#proggy').text(progress);
	    $('#proggy2').text(day_progress);
	    $('#dayy').text(dayy);

	}, 1000);
	

});
