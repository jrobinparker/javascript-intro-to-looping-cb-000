var array = []
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push("I am ${i} strange loop")
  }
  return array
}

<<<<<<< HEAD
let number = 10

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return "done"
}

var array = [1]

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue());
  
  return array
=======
function whileLoop(number) {
  while (number > 0) {
    console.log("${number}")
  }
  return done
>>>>>>> d8ce72e708cbdcf6a33b60fd4f399dd9c2de1b6e
}