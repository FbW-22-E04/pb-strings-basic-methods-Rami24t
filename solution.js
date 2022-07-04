//1.
const parkWalkStr = "I can walk in the park all day!";
console.log(parkWalkStr.slice(-13,-8));

//2.
const helloStr =  "Hello World";
console.log(helloStr.toUpperCase());

//3.
const earthlingsStr =  "Hello Earthling";
console.log(earthlingsStr.toLowerCase());

//4.
const jsStr = "JavaScript";
console.log(jsStr.substring(3,6));

//5.
const niceShoesStr = "nice shoes";
console.log(niceShoesStr.includes('l')); 
console.log(niceShoesStr.includes('n'));

//6.
const oldStr = 'choice';
const newStr = oldStr.substring(0,1) + oldStr + oldStr.substring(0,1);
console.log(newStr);

//7.
const scritcherStr = 'Scritch'; 
const lastThreeChars = scritcherStr.slice(-3);
console.log(lastThreeChars + scritcherStr + lastThreeChars);

//8.
let boogieNightsStr = 'BoogieWoogie';
const firstChar = boogieNightsStr[0];
boogieNightsStr = boogieNightsStr.replace(boogieNightsStr[0], boogieNightsStr.slice(-1));
boogieNightsStr = boogieNightsStr.slice(0,-1)+ firstChar;
console.log(boogieNightsStr);


//9.
const firstName = 'Rami';
const city = 'The Valley of The Wind';
const job = 'Software Engineering prince of Narnia XD';
console.log('My name is', firstName + '. I live in '+city+' and I am the '+ job +'.');

//10.
const foxStr = 'the quick brown fox';
const capitalizeFirst = foxStr[0].toUpperCase() + foxStr.substring(1);
console.log(capitalizeFirst);

/** 
//RESULTS:
1- park debugger eval code:3:9
2- HELLO WORLD debugger eval code:7:9
3- hello earthling debugger eval code:11:9
4- aSc debugger eval code:15:9
5.a- false debugger eval code:19:9
5.b- true debugger eval code:20:9
6- cchoicec debugger eval code:25:9
7- tchScritchtch debugger eval code:30:9
8- eoogieWoogiB debugger eval code:37:9
9- My name is Rami. I live in The Valley of The Wind and I am the Software Engineering prince of Narnia XD. debugger eval code:44:9
10- The quick brown fox debugger eval code:49:9
 */
