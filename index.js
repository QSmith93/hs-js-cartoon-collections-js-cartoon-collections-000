function dwarfRollCall(dwarves) {
  var call = "";
  for (var i = 0; i < dwarves.length; i++) {
    call = call + (i+1 + ". " + dwarves[i] + " " )
  }
  return  call
}

function summonCaptainPlanet(planeteerCalls) {
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!"
  }
  return planeteerCalls
}

words = ["earth", "wind", "fire", "water", "heart"]
var i = 0
words = ["wind", "fire", "water", "heart"]
i = 0
function longPlaneteerCalls(words) {
  for (i = 0; i < words.length; i++) {
    var n = words[i].length
    if (n > 4) {
      return true
    } else {
    return false
    }
  }
}

function findTheCheese(foods) {
for (i = 0; i < foods.length; i++) {
    if (foods[i] == "cheddar" || foods[i] == "gouda" || foods[i] == "camembert") {
      return foods[i]
      }
  }
  return "no cheese!"
}