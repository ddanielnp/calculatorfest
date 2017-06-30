document.addEventListener('DOMContentLoaded', init)

function init () {
  var basic_calc = calculator()
  var display = document.querySelector('.display')

  document.addEventListener('keyup', onKeyUp)

  function onKeyUp (event) {
    if (checkKeyCode(event.keyCode)) {
      // check if we're clicking enter

      if (event.keyCode !== 13) {
        // console.log(display.value)
        if (event.keyCode == 8) {
          display.value = display.value.substring(0, display.value.length - 1)
        } else {
          display.value += '' + event.key
        }
      }
         else if (display.value.includes('+')) {
          var displayValue = display.value
          calculateAdd(displayValue)
        } else if (display.value.includes('-')) {
          var displayValue = display.value
          calculateMinus(displayValue)
        } else if (display.value.includes('*')) {
          var displayValue = display.value
          calculateMutiply(displayValue)
        } else if (display.value.includes('/')) {
          var displayValue = display.value
          calculateDivision(displayValue)
        }
      } else {
        console.log('cannot type besides number')
      }
    }

  function calculateAdd (str) {
    var splitStr = str.split('+')
    var firstNum = parseInt(splitStr[0])
    var secondNum = parseInt(splitStr[1])
    var result = basic_calc.add(firstNum, secondNum)
    displayResult(result)
  }

  function displayResult (result) {
    display.value = result
  }

  function calculateMinus (str) {
    var splitStr = str.split('-')
    var firstNum = parseInt(splitStr[0])
    var secondNum = parseInt(splitStr[1])
    var result = basic_calc.minus(firstNum, secondNum)
    displayResult(result)
  }

  function calculateMutiply (str) {
    var splitStr = str.split('*')
    var firstNum = parseInt(splitStr[0])
    var secondNum = parseInt(splitStr[1])
    var result = basic_calc.multiply(firstNum, secondNum)
    displayResult(result)
  }

  function calculateDivision (str) {
    var splitStr = str.split('/')
    var firstNum = parseInt(splitStr[0])
    var secondNum = parseInt(splitStr[1])
    var result = basic_calc.division(firstNum, secondNum)
    displayResult(result)
  }
}

// key event is 0-9
// extend to '+' symbol, 'enter' symbol
function checkKeyCode (keycode) {
  if (keycode >= 48 && keycode <= 57) {
    return true
  }

  if (keycode === 187 || keycode === 13 || keycode === 189 || keycode === 191 || keycode === 8) {
    return true
  }

  return false
}
