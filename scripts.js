

var a = 20;
var b = "20";
var c = 5
var d = 15;


//equal to
if(a === b){
    //equal value equal type
    if(a === b ){
        console.log("both value and type is equal");
    }
    //not equal value or not equal type
    else if(a !== b){
        console.log("only value or type is a equal to b");
    }
}

//Greater than or eqal
// else if(a => 10){
//     //geter than
//     if(a > 10){
//         console.log('a is gater than 10');
//     }
// }


// else if (a != c){
//    if(a < c) {
//     console.log('a is less than c');
//    }
//    else{
//     console.log('a is grater than c');
//    }
// }

else{
    // if(c <= 5){
    //     console.log('C is eqal or  less than 5');
    // }
    // else{
    //     console.log('C is eqal or  less than 5');
    // }

    //ternary oparater
    c <= 5 ? console.log('C is eqal or  less than 5') :  console.log('C is eqal or  less than 5');
}
