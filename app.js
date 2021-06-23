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
// Output Field
const outPutContainer = document.createElement("div");
outPutContainer.classList.add("outputContainer");
const outPutHeader = document.createElement("h2");
outPutHeader.innerText = "Translate to morse code here";
const outPutArr = document.createElement("p");
outPutArr.innerText = "";
// Input Container
const inputContainer = document.createElement("div");
inputContainer.classList.add("inputContainer");
const inputF = document.createElement("input");
inputF.setAttribute("type", "text");
inputF.setAttribute("onchange", "changeText(this)");
inputF.classList.add("inputF");

/*
 *************append************
 */

// main        Parent: body
main.append(h1);
main.append(outPutContainer);
main.append(inputContainer);
//outputContainer Parent: main
outPutContainer.append(outPutArr);
outPutContainer.append(outPutHeader);
// inputContainer
inputContainer.append(inputF);
/*
 ****** Render
 */
app();
function app() {
  document.body.append(main);
}

/*********************************************************************
 *                      Controller
 ********************************************************************/
function changeText({ value }) {
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
  app();
}
