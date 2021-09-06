var operator = '*';
		
		var number1 = 20;
		var number2 = 10;

		console.log( "Given First No is : " + number1 );
		console.log( "Given Second No is : " + number2 );
		switch(operator) {
    		case '+':
         		result = number1 + number2;
				console.log( "Addition of the Numbers is :  "+ number1 + " + " + number2 + " = " + result  );
        		break;

    			case '-':
         		result = number1 - number2;
        			console.log( "Subtraction of the Numbers is :  "+ number1 + " - " + number2 + " = " + result );
        		break;

    			case '*':
         		result = number1 * number2;
        			console.log( "Multiplication of the Numbers is :  "+ number1 + " * " + number2 + " = " + result  );
       			 break;

    			case '/':
        		 result = number1 / number2;
        			console.log( "Multiplication of the Numbers is :  "+ number1 + " / " + number2 + " = " + result  );
        		break;

    			default:
        			console.log('Invalid operator');
        		break;
}