let i;
	for (i=1; i<=100; i++)
	{
		
		if (i%3 == 0){
			console.log("Fiz" + " ");
		}
		
		else if ((i%5) == 0){
			console.log("buzz" + " ");			
		}
		// number divisible by 5, print 'Buzz'
		// in place of the number
		else if ((i%15) == 0){				
			console.log("fizzBuzz" + " ");			
		}
		else // print the number	
		{
			console.log(i + " ");
		}
	}
