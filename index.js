// /************************************************************** Task 1: Warm-up! **************************************************************/
// //Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

// console.log('hey you')
// let votingAge = 16;

// if (votingAge < 18){
//     console.log(true);
// }else{
//     console.log(false);
// }



// //Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)


// let name = 'David';
// if (name.length > 4){
//     name = 'Dave'
// }else{
//     name = 'David Hays';
// }


// //Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


// let year = '1999';
// year = Number(year);


// //Task d: Write a function to multiply a*b 


// function mult(a,b){
//     return a*b;
// }


// /************************************************************** Task 2 **************************************************************/
// //Age in Dog years
// //write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


// function getAge(){
//     let age = prompt("What is your age?");
//     if (typeof Number(age) !== "number"){
//         while (typeof Number(age) !== 'number'){
//             age = prompt("Sorry, that wasn't a number, please try again!\nWhat is your age?");
//         }
//     }
//     return age;
// }

// function dogYears(age){
//     return age*7;
// }

// let dogAge = dogYears(getAge());

// console.log(dogAge);


// /************************************************************** Task 3 **************************************************************/
// //Dog feeder 
// //takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

// function getDog(){
//     let name = prompt('What is your dogs name?')
//     let weight = Number(prompt('What is your dogs weight in pounds?'))
//     let age = getAge()

//     let dog = {
//         Name:name,
//         Weight:weight,
//         Age:age
//     }
//     return dog;
// }

// function months(years){
//     let numMonths = Math.floor(years * 12)
// }

// function feed(dog){
//     let pounds = 0;

//     if (dog.Age < 1){
//         let numMonths = months(dog.Age);
//         if (numMonths >= 7){
//             pounds = .04 * dog.Weight;
//         }else if(numMonths >= 4){
//             pounds = .05 * dog.Weight;
//         }else if(numMonths >= 2){
//             pounds = .1 * dog.Weight;
//         }else{
//             pounds = "we just don't know"
//         }
//     }else if(dog.Weight > 15){
//         pounds = .02 * dog.Weight;
//     }else if(dog.Weight >= 11){
//         pounds = .03 * dog.Weight;
//     }else if(dog.Weight >= 6){
//         pounds = .04 * dog.Weight;
//     }else{
//         pounds = .05 * dog.Weight;
//     }
//     return pounds;
// }

// //feeding requirements
// // adult dogs at least 1 year 
// // up to 5 lbs - 5% of their body weight
// // 6 - 10 lbs - 4% of their body weight 
// // 11 - 15 lbs - 3% of their body weight 
// // > 15lbs - 2% of their body weight 

// // Puppies less than 1 year
// // 2 - 4 months 10% of their body weight
// // 4 - 7 months 5% of their body weight 
// // 7 - 12 months 4% of their body weight

// // when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
// let dogFood = feed(getDog())

// // simple version

// function feed(weight, age){
//     let pounds = 0;

//     if (age < 1){
//         let numMonths = months(age);
//         if (numMonths >= 7){
//             pounds = .04 * weight;
//         }else if(numMonths >= 4){
//             pounds = .05 * weight;
//         }else if(numMonths >= 2){
//             pounds = .1 * weight;
//         }else{
//             pounds = "we just don't know"
//         }
//     }else if(weight > 15){
//         pounds = .02 * weight;
//     }else if(weight >= 11){
//         pounds = .03 * weight;
//     }else if(weight >= 6){
//         pounds = .04 * weight;
//     }else{
//         pounds = .05 * weight;
//     }
//     return pounds;
// }

// feed(15,1)






/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function pick(){
    let selection = prompt("Do you pick Rock, Paper, or Scissors?");
    if (!(selection === "Rock" || "Paper" || "Scissors")){
        while (!(selection === "Rock" || "Paper" || "Scissors")){ 
            selection = prompt("No for reals, you have to ype exactly 'Rock' 'Paper' or 'Scissors'.\nSelect again!");
        }
    return selection;
    }
}

function contest(human){
    let enemyNum = Math.random();
    let enemy;
    let result;
    if (enemyNum > (2/3)){
        enemy = "Rock";
    }else if(enemyNum > (1/3)){
        enemy = "Paper";
    }else{
        enemy = "Scissors"
    }

    if (human === "Rock"){
        if (enemy === 'Rock'){
            console.log("You tie");
        }else if(enemy === "Paper"){
            console.log('You lose');
        }else{
            console.log('You WIN!');
        }
    }else if(human === "Paper"){
        if (enemy === 'Rock'){
            console.log("You WIN!");
        }else if(enemy === "Paper"){
            console.log('You tie');
        }else{
            console.log('You lose');
        }
    }else{
        if (enemy === 'Rock'){
            console.log("You lose");
        }else if(enemy === "Paper"){
            console.log('You WIN!');
        }else{
            console.log('You tie');
        }
    }
}

console.log(contest(pick()))
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(num){
    return num * 1.60934;
}



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCm(num){
    return num * 30.48;
}




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(num){
    while (num > 0){
        console.log(`${num} bottles of beer on the wall\n${num} bottles of beer`);
        num --;
        console.log(`take one down, pass it around\n${num} bottles of beer on the wall.`);
       
    }
}
annoyingSong(10);




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
//lookup include 
  
function getGrades(){
    let unfinished = true;
    let grades = [];

    while(unfinished === true){
        unfinished = confirm("Do you have more grades to enter?");
        grades.push(Number(prompt("What is the number grade?")));
    }

}

function teacherAssistant(grades){
    let letterGrades = [];
    for (grade in grades[grade]){
        if (grade > 90){
            letterGrades.push('A');
        }else if(grade > 80) {
            letterGrades.push('B');
        }else if(grade > 70){
            letterGrades.push('C');
        }else if(grade > 60){
            letterGrades.push('D');
        }else{
            letterGrades.push('F');
        }
    }
    return letterGrades;
}  

console.log(teacherAssistant(getGrades()))

// simple way 
function lettergrade(num){
    if (grade > 90){
        return 'A'
    }else if(grade > 80) {
        return 'B'
    }else if(grade > 70){
        return 'C'
    }else if(grade > 60){
        return 'D'
    }else{
        return 'F'
    }
}

console.log(lettergrade(98))

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

// function vowelCount(string){
//     for
// }




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





