/*******************************************************************
 *                        Model
 ********************************************************************/
const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};
/*******************************************************************
 *                        View
 ********************************************************************/
/*
 ****************Create *****************
 */
// main page
const main = document.createElement("div");
main.classList.add("mainPage");
// header
const h1 = document.createElement("h1");
h1.innerText = "Morse Code";
main.append(h1);
// Output Container
const outPutContainer = document.createElement("div");
outPutContainer.classList.add("outputContainer");
main.append(outPutContainer);
// output Header
const outPutHeader = document.createElement("h2");
outPutHeader.innerText = "Translate to morse code here";
outPutContainer.append(outPutHeader);
// output array
const outPutArr = document.createElement("p");
outPutArr.innerText = "";
outPutContainer.append(outPutArr);
// Input Container
const inputContainer = document.createElement("div");
inputContainer.classList.add("inputContainer");
main.append(inputContainer);
// input field
const inputF = document.createElement("input");
inputF.classList.add("inputF");
inputContainer.append(inputF);

/*
 ***********Render************
 */
app();
function app() {
  document.body.append(main);
}

/*********************************************************************
 *                      Controller
 ********************************************************************/
function changeText(e) {
  let value = e.target.value;
  console.log(value);
  const arr = [...value];
  const newArr = [];
  let tempVal = "";
  for (val of arr) {
    for (const key in morseCode) {
      key.toLowerCase() === val
        ? (newArr.push(`${val.toUpperCase()}: <b>${morseCode[key]}</b></br>`),
          (tempVal += `${morseCode[key]} `))
        : null;
    }
  }
  outPutArr.innerHTML = newArr.join("");
  outPutHeader.innerText = tempVal;
  inputF.value = "";
  app();
}

inputF.addEventListener("change", changeText);
