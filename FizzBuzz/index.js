const fizzBuzz = (max) => {
for(i = 1; i < max + 1; i++) {
	const divisibleBy3 = i % 3;
	const divisibleBy5 = i % 5;
	if(!divisibleBy3 && !divisibleBy5) console.log('FizzBuzz');
	if(!divisibleBy3)  console.log('Fizz');
	if(!divisibleBy5)  console.log('Buzz');
	}
}
fizzBuzz(100);

