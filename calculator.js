var data = document.querySelector('.mainCalculatorContainer')
var num = 0
var answer = 0
var memory = 0
var numDigits = 0
var numBuffer = []
var state = 'initial'
var numA = 0
var numB = 0
var numALeft = false
var numARight = false
var numBLeft = false
var numBRight = false
var display = ''

var e = data.addEventListener('click', (e) => {

   var button = e.target.textContent

   if (button === '1' || button === '2' || button === '3' || button === '4' || button === '5' ||
      button === '6' || button === '7' || button === '8' || button === '9' || button === '0') {

      // Create integer
      // 1 is in the ones column
      // 12 one moves to tens column and 2 is in ones column
      // 123 one moves to hundreds, two to tens, 3 to ones column
         numBuffer.push(Number(button))
         app.num(numBuffer)
         app.render(num)
         console.log('I am in the number section')
   }
   else if (button === '.') {
      // Shift to decimal mode
   }
   else if (button === '+' || button === '-' || button === '*' || button === '/') {
      // change state
      switch(button) {
         case '+':
         state = 'add'
         break
         case '-':
         state = 'sub'
         break
         case '*':
         state = 'mul'
         break
         case '/':
         state = 'div'
         break
      }
      app.num(numBuffer)
      numA = num
      numBuffer = []
      app.render(numA)
      console.log('numA is : ', numA)
   }
   else if (button === '=') {
      app.num(numBuffer)
      numB = num
      numBuffer = []
      app.render(num)

      switch(state) {
         case 'add':
         app.add()
         break
         case 'sub':
         app.sub()
         break
         case 'mul':
         app.mul()
         break
         case 'div':
         app.div()
         break
      }
      state = 'equal'
   }
   else if (button === 'CE'){
      state = 'initial'
      numA = 0
      numB = 0
      app.render(numA)
   }
})

var app = {
   initState: () => {
      state = 'initial'
      console.log('I am in the initial state')
   },
   zeroNum: () => {
      num = 0
      app.initState()
   },
   num: (numBuffer) => {
      // numBuffer is [7, 8, 9]
      num = 0
      var count = numBuffer.length
      var power = 0
      for (var i = count - 1; i >= 0; i--) {
         num += numBuffer[i] * Math.pow(10, power)
         power += 1
      }
   },
   add: () => {
      answer = numA + numB
      app.render(answer)
   },
   sub: () => {
      answer = numA - numB
      app.render(answer)
   },
   mul: () => {
      answer = numA * numB
      app.render(answer)
   },
   div: () => {
      answer = numA / numB
      app.render(answer)
   },
   // Update the scratchpad
   render: (num) => {
      display = document.querySelector('.scratchPad')
      display.textContent = num
   }
}

app.initState()