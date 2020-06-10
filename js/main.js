//alert("My First JS in file .js !");


// Declare Variabel
var name = "Ricardo Tavares";
var years = 53;
var frase = "Japão é o melhor time do mundo !";
alert("Wellcome " + name + " !" + " You has " + years + " years old ...");

// Work with String
console.log(name);
console.log(years);
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));

// Declare with Array
var list = ["Maça","Pêra", "Laranja"];
alert(list[1]); // print "Pêra"

// Insert new line
list.push("Uva");
console.log(list);

// Remove last line
list.pop();
console.log(list);

// Print the Length of Array
console.log(list.length);

// Print the List of Array on mode Reverse
console.log(list.reverse());

// Print the List of Array with unique String
console.log(list.toString());

// Change the Caracter (",") by Caracter (" | ") and Transform in String
console.log(list.join( " | "));

// Object of Dictionary
var fruits = {name:"Apple", colors:"Red"};
console.log(fruits.name);
alert(fruits.colors);

// Object of List of Dictionary
var fruits = [{name:"Apple", colors:"Red"}, {name:"Grape", colors:"Purple"}];
console.log(fruits);
console.log(fruits[1].name);
alert(fruits[1].name);

// Input of data and condition
var years = prompt("What is your years ?");

if (years >= 18) {
    alert("Grant of years !");
} else {
    alert("Less of years !");
};

// While
var count = 0;
while ( count <= 5 ) {
    console.log(count);
    count++;
};

// For
var count;
for ( count = 0; count <= 5; count++ ) {
    console.log(count);
};

// Return as String the Date
var sDate = new Date();
console.log(sDate);

// Return the Month
//var sDate = new Date();
console.log(sDate.getMonth()+1);

// Return the Day
//var sDate = new Date();
console.log(sDate.getDay());

// Return the Hours
//var sDate = new Date();
console.log(sDate.getHours());

// Return the Minutes
//var sDate = new Date();
console.log(sDate.getMinutes());

// Use of Function
function soma(n1, n2) {
    return( n1 + n2 );
}

console.log(soma(5, 10));

function validyears( years ) {
    var valid;
    if ( years >= 18 ) {
        valid = true;
        alert("Grant of years !");
    } else {
        valid = false;
        alert("Less of years !");
    }
    return valid;
}

var years = prompt("What is your years ?");
console.log( validyears(years) );


// Function on Button
function btnClicked() {
   //alert("Thanks by clicked !!!"); 
   //console.log(document.getElementById("thanks"));
   document.getElementById("thanks").innerHTML = "<b>Thanks by clicked !!!</b>";
};

//
function btnRedirect() {
    window.open("https://web.digitalinnovation.one/");
    // Or
    window.location.href = "https://web.digitalinnovation.one/";
};

//
function btnChange() {
    //alert("Thanks by clicked !!!"); 
    document.getElementById("thanks2").innerHTML = "<b>Good bye !!!</b>";
 };