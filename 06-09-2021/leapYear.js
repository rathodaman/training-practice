var year = 2020;
	
	if(year % 400==0){
		console.log( "Given year " + year + " is a Leap year ");
	}
	else if (year % 100 ==0){
		console.log( "Given year " + year + " is Not a Leap year ");
	}
	else if (year % 4 ==0) {
		console.log( "Given year " + year + " is a Leap year ");
	}
	else{
		console.log( "Given year " + year + " is Not a Leap year ");
	}
 