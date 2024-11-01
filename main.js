/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function user() {
   let age = prompt("how old are you")
   Number(age)
   if (age >= 60) {
    return "you qaulify for our senoir discount" 
   }
   if (age <= 15) {
    return "you are not able to drive yet"
   }
   if (age == 44) {
    return "so is Mr.squirrel"
   }
   return "you do not qualify for our senior discount"
   }

function user_name(){
    let name = prompt("what is your name")
   if (name == "Mr.Squirrel") {
    return (`🐿️`)
   }
   if (name == name.length(7)) {

   }
}

function start_game() {
   let user_name = prompt("what is your username")
   alert(`welcome, ${user_name} to haunted St.Matthew highschool`)

   let place = prompt("would you rather go to the libary(1) or to the autoshop(2)")

   if (place == 1) {
    libary()
   }

   if (place == 2) {
    autoshop()
   }

   }

   function libary(){
    let choice = prompt("you see a book on a pedastool do you open it(1) or do you leave it alone and go to Mrs.Mccurrie's room(2)")
    if (choice == 1) {
        alert(`A ghost jumps out of the book`)
        let choice_2 = prompt("you start running from the ghost do you jump out the window(1) or to Mrs.Mccurrie room(2)")
        
    
        if (choice_2 == 2){
            alert("you walk in you hear something from the ceiling you look up and you get jumped at by a foul beast you die")
            alert("GAME OVER!!!!!!!")
        }
        if (choice_2 == 1){
            alert("You run and jump for the window the ghost grabs your ankle you lose and shoe but you live and you escape to live another day")
            alert("YOU WIN!!!!")
        }
        
    }
    if (choice == 2) {
        alert("you walk in you hear something from the ceiling you look up and you get jumped at by a foul beast you die")
        alert("GAME OVER!!!!!!!")
    }
   }
   function autoshop() {
    let choice = prompt("you walk into the autoshop you look at Mr.Galloway's desk, do you ignore it and leave to Mr.Croteau's room(1) do you open the book(2)")

    if (choice == 1){
        alert("you leave and on the way you see a huge beast roaming the halls you sprint into Mr.croteau's class hoping the beast didn't hear or see you in the hall")
        let choice_2 = prompt("do you try to hide in the studio(1) or do you try to run out of the school through the exit near the music room(2)")
        if (choice_2 == 1){
            alert("you run into the studion you accidently leave the door open, you hear the beast walk into the room the beast looks around and then leaves, you sneak out and then see the beast walking the other way you sneak out the school to live another day!")
            alert("YOU WIN!!!!!")
        }
        if (choice_2 == 2){
            alert("you start sprinting for the exit you find out the beast did hear you, as your trying to out run the beast for the exit he catches you and you die!")
            alert("GAME OVER!!!")
        }
    }
    if (choice == 2){
        alert("you open the book and you see a phrase repeated in blood 3 times it reads 'you're next' you hear a noise and then the grim reaper appears behind you")
        prompt("do you run into the garage do you go to the garage door(1) or to the right and hide behind something(2)")
    }
   }