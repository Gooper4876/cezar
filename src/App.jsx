import './App.css'

let key = 1
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let currentLetterIndex = 0

function setKey(event) {
  key = Number(event.target.value)
  document.getElementById('key').innerHTML = `Klucz: ${key}`
}

function encryptOne() {
  const value = document.getElementById('input').value
  const table = value.split('')
  const currentLetter = table[currentLetterIndex]

  if (!currentLetter) {
    clearOutput()
    return
  }

  const outputElement = document.getElementById('output')
  const output = (outputElement.innerHTML || value).split('')

  if (currentLetter !== ' ') {
    let index = alphabet.indexOf(currentLetter.toUpperCase())
    let newIndex = (index + key) % 26
    output[currentLetterIndex] = alphabet[newIndex]
  }

  outputElement.innerHTML = output.join('')
  currentLetterIndex += 1
}

function encryptFull() {
  const value = document.getElementById('input').value
  const table = value.split('')
  let output = ''

  table.forEach((letter) => {
    if (letter === ' ') {
      output += ' '
    } else {
      let index = alphabet.indexOf(letter.toUpperCase())
      let newIndex = (index + key) % 26
      output += alphabet[newIndex]
    }
  })

  document.getElementById('output').innerHTML = output
  currentLetterIndex = table.length
}

function clearOutput() {
  document.getElementById('output').innerHTML = document.getElementById('input').value
  currentLetterIndex = 0
}


function App(params) {

  
  return(
    <>
    <input type="text" placeholder='Enter text' id="input" onChange={clearOutput}/>
    
    <input type="range" min="1" max="25" onChange={setKey}  defaultValue={1}/>

    <p id="key">Klucz: {key}</p>

    <button onClick={encryptOne}>Encrypt Next Letter</button>
    
    <button onClick={encryptFull}>Encrypt All</button>
    
    <button onClick={clearOutput}>Clear encrypted text</button>


    <h1 id="output"></h1>


    <div id="letter_panel">
      <div class="letter">
        test  
      </div>

      <div class="letter">
        test  
      </div>
    </div>

    
    </>
  )
}

export default App