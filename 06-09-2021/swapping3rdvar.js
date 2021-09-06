var no1 = 206;
	var no2 = 985;
	

	console.log( "Before Swapping Numbers<br>");
	console.log( " Number1 is : " + no1);
	console.log( " Number2 is : " + no2);

	no1=no1+no2;
	no2=no1-no2;
	no1=no1-no2;

	console.log( "After Swapping Numbers");
	console.log( " Number1 is : " + no1);
	console.log( " Number2 is : " + no2);