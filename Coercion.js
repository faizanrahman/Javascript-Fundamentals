// What is coercion?
// Coercion means to force. In most languages, the statement below will cause an error, but not in javascript. 
// Ex) 25 + true
// The above statement will result in 26. 

// -, *, /, % operators convert to numbers. 
// + is different, because it can be used to add numbers or concenate a string, it doesn't automatically convert
// to a number. It's first priority is to convert into a string.

// Ex) 5 + "1" = "51" => Concatenates the 5 with 1, as a string.

// Ex) 25 * false
// Since false converts to a 0, 25 * 0 will reult in 0.    
// 0 


// Another type of coercion is truthiness or falsy.
// Most JS values convert to truthy.

var i = 10;
if(i) {
    console.log("It is true");
}

var i = "string";
if(i) {
    console.log("It is true");
}

// There are only 7 values that convert to false in Javascript.
// Those are: 
// 1. false
// 2. 0
// 3. -0
// 4. null
// 5. NaN
// 6. undefined
// 7. "" => empty string without a space

// An empty object {}, an empty array [], a negatvie number -5, they all evaluate to true.

var j;
if(!j) {
    j = 10;
};
console.log(j);

When to use Truthy/Falsy, and when not to use it?

A truthy value is anything that evaluates to true in a conditional. JS coerces it into a Boolean

Ex) Without using truthy/Falsy

if(somevar !== undefined && somevar !== null && somevar !== ""){
    "do something";
}

Using truthy/Falsy
if(somevar){

}

