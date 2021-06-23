/*******************************************************************
 *                        Model
 ********************************************************************/
 const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
 }
/*******************************************************************
 *                        View
 ********************************************************************/
// main page
 const main = document.createElement("div")
 main.classList.add("mainPage")
 
//
// header 
const h1 = document.createElement("h1")
h1.innerText= "Morse Code"
//
// Outout Field
const outPutHeader = document.createElement("h2")
outPutHeader.innerText = "Translate to morse code here"
const outPutArr = document.createElement("p")
outPutArr.innerText = ""
// Input Field
const inputF = document.createElement("input")
inputF.setAttribute("type", "text")
inputF.setAttribute("onchange", "changeText(this)")
inputF.innerText = "click"
inputF.classList.add("inputF")
//
// Render
app();
function app() {
    const app = document.querySelector("#app")
    app.append(main)
    main.append(h1)
    main.append(outPutHeader)
    main.append(outPutArr)
    main.append(inputF)
    
}

/*********************************************************************
 *                      Controller
 ********************************************************************/
function changeText({value}) {
    const arr = [...value];
    const newArr= []
    let tempVal =""
        for(val of arr) {
            for(const key in morseCode) {
           key.toLowerCase() === val? (newArr.push(`${val}: ${morseCode[key]}</br>`), tempVal += `${morseCode[key]} `) : null
          
        }
    }
    console.log(arr)
     outPutArr.innerHTML = newArr
     outPutHeader.innerText = tempVal
     app()
}