// Code your solution in this file!
let headQrt = 42

function distanceFromHqInBlocks(numBlocks) {
    if (numBlocks < 42) {
        return headQrt - numBlocks;
    }
    if (numBlocks >= 42) {
        return numBlocks - headQrt;
    }
}

let blockFeet = 264;

function distanceFromHqInFeet(numBlocks) {
    let distance = distanceFromHqInBlocks(numBlocks);
   return distance * blockFeet
}


function distanceTravelledInFeet(start, destination) {
    let travelFt = start - destination;
    let travelFtInBlocks = ""

    if (start <= destination) {
        travelFt = destination - start;
    }
return travelFtInBlocks = travelFt * blockFeet

  }
  
  
  function calculatesFarePrice(start, destination) {
    let farePrice = 0
    let distanceFeet = distanceTravelledInFeet(start, destination)
    if (distanceFeet <= 400) {
        farePrice = 0
        return farePrice;
    }
    if ((distanceFeet > 400 && distanceFeet < 2000)) {
        farePrice = (distanceFeet - 400) * .02;
        return farePrice;
    }

    if (distanceFeet > 2000 && distanceFeet < 2500) {
        farePrice = 25;
        return farePrice;
    }

    if (distanceFeet > 2500) {
        farePrice = "cannot travel that far";
        return farePrice;
    }


  }