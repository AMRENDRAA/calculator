let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
let history = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("button text is ", buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value += screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      if (history == "") {
        history += screenValue + "=" + eval(screenValue);
      } else {
        history += "," + screenValue + "=" + eval(screenValue);
      }
      console.log("history", history);
    } else {
      if (buttonText == "H") {
        return;
      }
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

const show_history = () => {
  const input = document.getElementById("screen");
  console.log("history", history);
  input.value = history;
};
