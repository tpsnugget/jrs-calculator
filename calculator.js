var data = document.querySelector('.mainCalculatorContainer')
var num = 0
var memory = 0
var state = 'initial'
var numA = false
var numB = false
var numALeft = false
var numARight = false
var numBLeft = false
var numBRight = false

var e = data.addEventListener('click', (e) => {

   var button = e.target.textContent

   if (e.target.className.includes(state)) {
      if (state === 'initial') {
         if (button === '1' || button === '2' || button === '3' || button === '4' ||
             button === '5' || button === '6' || button === '7' || button === '8' || button === '9') {
                
             }
      }
      else if (state === 'numALeft') {

      }
      console.log(e.target.textContent + ' is a legal button press in the ' + state + ' state: ', e.target.className.includes('initial'))
   }
   else {
      console.log(e.target.textContent + ' is NOT a legal button press in the ' + state + ' state: ')
   }

   switch (button) {
      case 'CE': app.zeroNum()
         console.log('I just zeroed out num')
         break
      case '1':
         num += Number(button)
         break
      case '2':
         break
      case '3':
         break
      case '4':
         break
      case '5':
         break
      case '6':
         break
      case '7':
         break
      case '8':
         break
      case '9':
         break
      case '.':
         break
      default:
   }
   console.log('num is: ', num)
})

var app = {
   initState: () => {
      state = 'initial'
      console.log('I am in the initial state')
   },
   zeroNum: () => {
      num = 0
      app.initState()
   }
}

app.initState()