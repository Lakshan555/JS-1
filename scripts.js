/*
Kasun and Chamal are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height ^ 2
(Mass is kg and Height in meter)
1. Store Kasun's and Chamal's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Kasun has a higher BMI than Chamal.
4. Print a string to in alert box containing the variable from step 3.
*/

var mas,higth,bmik,bmic,isKasun;

//Claculate Kasun BMI
mas =  prompt("Enter Kasun mas");
higth = prompt("Enter Kasun Higth");
bmik = mas / higth ** 2;

mas =  prompt("Enter Chamal mas");
higth = prompt("Enter Chamal Higth");
bmic = mas / higth ** 2;

isKasun = (bmik > bmic);

alert ("Kasun BMI " + bmik + " Chamal BMI " + bmic + " Kasun higher than chamal is "  + isKasun);
 
