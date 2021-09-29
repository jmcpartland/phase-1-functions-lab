// Code your solution in this file!
function distanceFromHqInBlocks(street){
    let blocks;
    if (street > 42) {
        blocks = street - 42;
    } else {
        blocks = 42 - street;
    }
    return blocks;
}

function distanceFromHqInFeet(street) {
    let feet = distanceFromHqInBlocks(street) * 264;
    return feet;
}

function distanceTravelledInFeet(num1, num2) {
    let travelled = (num1 - num2) * 264;
    return Math.abs(travelled);
}

function calculatesFarePrice(num1, num2) {
    let travelled = distanceTravelledInFeet(num1, num2);
    let price

    if (travelled <= 400) {
        'gives customers a free sample';
        price = 0;
        return price;
    } else if (travelled > 2500) {
        return 'cannot travel that far';   
    } else if (travelled > 400 && travelled < 2001) {
        price = (travelled - 400) * .02;
        return price;
    } else if (travelled > 2000) {
        price = 25;
        return price;
    }
    
}