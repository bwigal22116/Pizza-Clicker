var pizza = 0
localStorage.setItem("Pizza", pizza);
if (pizza == 0) {
var pizza = 0
} else {
   // code is executed
}
function ChangeClicksBy1() {
  let pizza = pizza + 1;
}
document.getElementById("myText").innerHTML = pizza;
