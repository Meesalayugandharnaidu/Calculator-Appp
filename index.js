let a = document.getElementById("info");

function Display(value) {
  a.value += value;
}

function clearDisplay() {
  a.value = " ";
}

function deletel() {
  a.value = a.value.slice(0, -1);
}
function Result() {
  try {
    let result = eval(a.value);
    a.value = result;
  } catch (e) {
    a.value = "Error";
  }
}
