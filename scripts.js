//create variables
var myAge , yourAge, year , result;

myAge = 24
yourAge = 25
year = 2022

//substarction
result = year -  myAge
console.log('i was born in ' + result);

//additions
result = year + 10 ;
console.log('After 10 years it will be  ' + result);

//multipication
result = myAge * yourAge ;
console.log('multipication our age  ' + result);

//divison
console.log('divison of our age  ' + (myAge/yourAge));

//exponetitaion
console.log('Exponet of my age  ' + (myAge**2));

//increamt
console.log(myAge++);
console.log('Post increament of my age ' + myAge);

console.log(++myAge);
console.log('Pre increament of my age ' + myAge);


//decrement
console.log(myAge--);
console.log('Post decrement of my age ' + myAge);

console.log(--myAge);
console.log('Pre decrement of my age ' + myAge);


//oprater Presidence 
var cal = (20+30)/10+4.5-2/4**2;
console.log(cal);