function dwarfRollCall(dwarves) {
  var call = [];
  for (var i = 0; i < dwarves.length; i++) {
    call.push((i+1) + ". " + dwarves[i])
  }
  return  call.join(" ")
  dwarves = ["Dopey", "Grumpy", "Bashful"];
  for (i = 0; i < dwarves.length; i++) {
  dwarves.push((i+1) + ". " + dwarves[i])
  }
  return 
}
// I don't know why my result is being rejected. I have the exact result expected.

function summonCaptainPlanet(planeteerCalls) {
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!"
  }
  return planeteerCalls
}

function longPlaneteerCalls(words) {
  while (i < words.length) {
    var n = words[i].length
    if (n > 4) {
      return "true"
    } else {
    return "false"
    }
  }
}
// I know that my function is assessing the length of the first element of the index, but I don't believe that it is continuing to assess down the line. How can I change my FOR loop to properly search this? 
// Or is my function so far from what was expected? Am I supposed to set up a function to check shortCalls vs longCalls?

function findTheCheese(foods) {
let i = 0
foods = [];
var cheese = ["cheddar", "gouda", "camembert"];
  if (foods[i] === cheese) {
    return "cheddar"
  } else if (foods != cheese) {
  return 'no cheese!'
  }
}
// "no cheese!" works just fine. Need to find a way to have a foods[i] match one of the cheeses. Could set === "cheddar", but that's cheap.