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

document.getElementById("guess").addEventListener("click", guess_10)

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
        let choice_2 = prompt("do you run into the garage do you go to the garage door(1) or to the right and hide behind something(2)")
        if (choice_2 == 1){
            alert("you run towards the garage door you try to pull it up and it's locked you turn around and then die to the grim reaper")
            alert("GAME OVER!!!!!!")
        }
        if (choice_2 == 2) {
            alert("you run and hide behind a tool box you hear the grim reaper slowly walking towards you, you find a bolt and a screwdriver on the ground and toss it to the other side of the room the grim reaper hears the sound turns his back and then you run straight out u see a beast")
            let choice_3 = prompt("do you run straigt to the right and leave from the exit(1) or do you try to kill the beast with the screwdriver you found(2)")
            if (choice_3 == 1){
                alert("you start sprinting for the exit the beast comes running after you, you're just fast enough to out run the beast ")
            }
        }
    }
   }


   function menu(){
    let message = `Hi! Please make a selection:
    1 - Play
    2 - Options
    3 - DLC
    4 - Check for Updates
    5 - Exit
    `
    let selection = Number(prompt(message))
    if (selection == 1){
        alert("Let's play!")
        let difficulty = +prompt(`select a difficulty
            1 - Easy
            2 - Medium
            3 - Hard`)
            alert("you selected:" + difficulty)
                if (difficulty == 1){
                    alert("You selected the easy route")
                }
                else if (difficulty == 2){
                    alert("Most people select medium")
                }
                else if (difficulty == 3){
                    alert("I see you like a challenge")
                }
                 }
        else if (selection == 2){
            alert("You selected Options.")
        }
        else if (selection == 3){
            alert("No new DLC at this time.")
        }
        else if (selection == 4){
            alert("Everything is up to date.")
        }
        else if (selection == 5){
            alert("Bye!")
        }
   }
   function square_root(){
if ((value > 0) && (value % 2 == 0)) {
    return Math.sqrt(value);
} else if (value < 0) {
    return "Cannot take the square-root of a negative";
} else {
    return `${value} is neither even nor positive`;
}
}
 
function is_number(num){
    if (typeof(num) == "number"){
         return true
    }
    else {
         return false
    }
}
function is_number_which_day(num){
    if (typeof(num) == "number"){

    }
    else {
         return `invaild type`
    }
}

function which_day(n) {
     if (n == 1){
        return `Sunday`
    }
    else if (n == 2){
        return `Monday`
    }
    else if (n == 3){
        return `Tuesday`
    }
    else if (n == 4){
        return `Wednesday`
    }
    else if (n == 5){
        return `Thursday` 
    }
    else if (n == 6){
        return `Friday` 
    }
    else if (n == 7){
        return `Saturday`
    }
    else {
        return `you put a invaild day of the week`
    }
}

function guess_10(){
    let rndnumber = randInt(1, 10)
    console.log(rndnumber)
    let user_input = +prompt("pick a number from 1 to 10")
    if (rndnumber == user_input){
        alert("You are correct!!!!")
    }
    else if (user_input > 10){
        alert(`you didn't pick a number through 1-10, the number was: ${rndnumber}`)
    }
    else if(user_input < rndnumber){
        alert(`your number was to low, the number was: ${rndnumber}`)    }
    else if (user_input > rndnumber){
        alert(`your number was to high, the number was: ${rndnumber}`)
    }
    else{
        alert("there was a error!")
    }
}

function average(n) {
    let avg = 0
    let count = 1
    
    while (count <= n){
    avg += +prompt(`pleas enter value ${count}/${n}`)
    count++
    }
    avg = round(avg / n, 1)
    console.log(`the avgerage is ${avg}`)
}

function random_until(min, max, stop ){
    if (stop > max || stop < min || max <= min){
        return -1
    }
    let rnd = randInt(min, max)
    while (rnd != stop){
        console.log(rnd)
        rnd = randInt(min, max)
    }
    return stop

}