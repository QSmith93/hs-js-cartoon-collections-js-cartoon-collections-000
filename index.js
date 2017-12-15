function dwarfRollCall(dwarves) {
  var call = [];
  for (var i = 0; i < dwarves.length; i++) {
    call.push((i+1) + ". " + dwarves[i])
  }
  return  call.join(" ")
  dwarves = ["Dopey", "Grumpy", "Bashful"];
  for (var i = 0; i < dwarves.length; i++) {
  dwarves.push((i+1) + ". " + dwarves[i])
  }
  return 
}

function summonCaptainPlanet(planeteerCalls) {
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!"
  }
  return planeteerCalls
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    var n = words[i].length
    if (n > 4) {
      return "true"
    } else {
    return "false"
    }
  }
}

function findTheCheese (foods) {
}
