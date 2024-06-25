function scuberGreetingForFeet(distance){
  if(400 > distance) {
    return ("This one is on me!")
  }
 else if(distance >= 400 && distance <= 2000) {
  return("That will be twenty bucks.")
 }
 else if(distance > 2000 && distance < 2500) {
  return("I will gladly take your thirty bucks.")
 }
else if(distance > 2500) {
  return ("No can do.")
}

}

function ternaryCheckCity(location){
  if(location ==="NYC") {
    return ("Ok, sounds good.")
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(value){
switch(value) {
  case "generous":
  return "Thank you so much."
    break
  case 'not as generous':
  return 'Thank you.'
  break
  default:
    return 'Bye.'
}
}