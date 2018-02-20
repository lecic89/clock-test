var $needleSecond = $('.js-seconds'),
	$needleMinuts = $('.js-minuts'),
	$needleHours = $('.js-hours');


function setDate() {
	var date = new Date,
		hours = date.getHours(),
		minuts = date.getMinutes(),
		seconds = date.getSeconds(),
		secondsDegrees = (seconds/60*360),
		minutsDegrees = (minuts/60*360) + 6*seconds/60,
		hoursDegrees = (hours/12*360) + 30*minuts/60;
		// hoursDegreesPlusOne = (hours/12*360+6),
		// hoursDegreesPlusTwo = (hours/12*360+12),
		// hoursDegreesPlusThree = (hours/12*360+18),
		// hoursDegreesPlusFour = (hours/12*360+24);

	if (seconds === 0) {
		$needleSecond.addClass('no-transition');
	} else {
		$needleSecond.removeClass('no-transition');
	}

	$needleSecond.css({'transform' : 'rotate('+ secondsDegrees +'deg)'});
	$needleMinuts.css({'transform' : 'rotate('+ minutsDegrees +'deg)'});
	$needleHours.css({'transform' : 'rotate('+ hoursDegrees +'deg)'});
	
	// if (minutsDegrees >= (0/60*360) && minutsDegrees < (12/60*360)) {
	// 	$needleHours.css({'transform' : 'rotate('+ hoursDegrees +'deg)'});
	// }
	// if (minutsDegrees >= (12/60*360) && minutsDegrees < (24/60*360)) {
	// 	$needleHours.css({'transform' : 'rotate('+ hoursDegreesPlusOne +'deg)'});
	// }
	// if (minutsDegrees >= (24/60*360) && minutsDegrees < (36/60*360)) {
	// 	$needleHours.css({'transform' : 'rotate('+ hoursDegreesPlusTwo +'deg)'});
	// }
	// if (minutsDegrees >= (36/60*360) && minutsDegrees < (48/60*360)) {
	// 	$needleHours.css({'transform' : 'rotate('+ hoursDegreesPlusThree +'deg)'});
	// }
	// if (minutsDegrees >= (48/60*360)) {
	// 	$needleHours.css({'transform' : 'rotate('+ hoursDegreesPlusFour +'deg)'});
	// }
}

setInterval(setDate, 1000);