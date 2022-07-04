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
