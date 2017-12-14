function dwarfRollCall(dwarves) {
  var call = [];
  for (var i = 0; i < dwarves.length; i++) {
    call.push((i+1) + ". " + dwarves[i])
  }
  return  call.join(" ")
}

function summonCaptainPlanet(planeteerCalls) {
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!"
  }
  return planeteerCalls
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
