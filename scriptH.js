//  1a
let warmHugs = "Hi \, I\'m Olaf and i like warm hugs."

//  1b
console.log(warmHugs.toUpperCase());

// 1c
warmHugsH = warmHugs.replace ("like", "love");
console.log(warmHugsH);
// or
// console.log(warmHugs.replace("like", "love"));

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
// console.log(beenImpaled.slice(18));
console.log(beenImpaled.slice(-18));

// 3a
let dotDotDot = "...";

// 3b
let skullBones = 'I donot have a skull${dotDotDot}or bones';
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
// let randomNumber = Math.random(); // 0 through 0.99999
// randomNumber *= 3; // 0 to 2.99999
// raadamNumber = Math.floor(randomNumber); // set rid of decimal [ 0 to 2]

// randomNumber ++;
// console.log(randomNumber);

// or

let randomNumber = Math.floor(Math.random () *3 +1);
console.log(randomNumber);

// or 
// Floor is still best practice
// let randomNumber = Math.ceil(Math.random()*3);
// console.log(randomNumber);

// Bonus 
// 6
// let go = "Let it Go";
// console.log(go.toUpperCase().repeat(2));

// or 
// console.log("Let It Go!".repeat(2).toUpperCase());
console.log("Let It Go!".repeat(2).toUpperCase().trim ());

// 7a
let reindeers = "Reindeers are better than people.";

// 7b
// console.log(reindeers.replace("Reindeer are better than people."));
// console.log(reindeers.replaceAll(" ", "-"));

// or
// console.log(reindeers.replace(/ /gi, "-"));

// or
// console.log(reindeers.replace(" Reindder are better than people.""T));

// 8
// console.log(Math.SQRT2);
console.log(Math.sqrt(2));

// 9
// let newRandomNumber = Math.floor((Math.random [ ]*[23-7+1]+7));

let newRandomNumber = Math.floor((Math.random  ( )*(17)+7));

console.log(newRandomNumber);

