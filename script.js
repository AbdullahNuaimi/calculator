
/*document.addEventListener('keydown', (event) => {
  var name = event.key;
  var code = event.code;
  // console.log(name);
  if (name != "Enter") { display(name) }
  if (name == "Enter") { calculate(); }
}, false);*/

function clearScreen() {
  document.getElementById("screen").value = "";
}

function display(value) {
  document.getElementById("screen").value += value;
}

function calculate() {
  var p = document.getElementById("screen").value;
  var q = eval(p);
  document.getElementById("screen").value = q;
}