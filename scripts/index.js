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


	    int_d = new Date(2008, 11+1,1);
		d_last = new Date(int_d - 1);
	 
	    var monat_perc = Math.abs((today.getDate() / d_last.getDate()) * 100).toFixed(2);

	    $('#name').text('endan'); //set your name here

	    $('#timenow').text(moment().format('MMM D, YYYY h:mm:ss a'));
	    $('.proggy').text(progress + "%");
	    $('#proggy2').text(day_progress);
	    $('#dayy').text(dayy);
	    $('#monat').text(moment().format('MMMM'))
	    $('#monat_perc').text(monat_perc)
	    let proggy_bar_class =("w-" + Math.round(progress)).toString()
	    $('#proggy-bar').addClass(proggy_bar_class)
	    
	    let images_arr = ['1.png', '2.png', '3.png', '4.png', '5.png', 
	    '7.png', '8.png', '9.png', '10.png',
	    '11.png', '12.png', '13.png', '14.png', '15.png',
	    '16.png', '17.png', '1.gif']
	    images_arr = shuffle(images_arr)
	    $('#imgy').attr('src', 'images/' + images_arr[0])

	}, 1000);
	

});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
