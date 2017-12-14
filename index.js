function dwarfRollCall(dwarves) {
  dwarves = [];
  for (var i = 0; i < dwarves.length; i++) {
    var call = []
    call.push((i+1) + ". " + dwarves[i])
  }
  return call.join(" ")
}

function summonCaptainPlanet(planeteerCalls) {
  planeteerCalls = [];
  var shoutCalls = []
  for (var i = 0; i < planeteerCalls.length; i++) {
    shoutCalls = planeteerCalls[i].toUpperCase() + "!"
  }
  return shoutCalls
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
