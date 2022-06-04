// JS Switch Statements

let day;
switch (new Date().getDay()) { // Will compare Date to getDay. Will use the actual day it is
    case 0:
        day = 'Sunday';
            break;
    case 1:
        day = 'Monday';
            break;
    case 2:
        day = 'Tuesday';
            break;
    case 3:
        day = 'Wednesday';
            break;
    case 4:
        day = 'Thursday';
            break;
    case 5:
        day = 'Friday';
            break;
    case 6:
        day = 'Saturday';
            break;
}
console.log(day);




let Animal = 'Chicken';
switch (Animal) {
    case 'Cow':
    case 'Giraffe':
    case 'Dog':
    case 'Pig':
        console.log('This animal will go on Noah\'s Ark.'); // Any of the case inputs above will return this message, if none are true it will continue down the list
        break;
    case 'Spoon':
        console.log('A spoon is not an animal!');
        break;
    case 'Dinosaur':
    default: // Means else 
        console.log('This animal will not be on the Ark.'); // If the user enters Dinosaur or anything else it will return this message
}