//get the variable

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalCountEl = document.getElementById("total-count-el")
let count = 0
let totalPeopleEntered = 0

//timeStamp function that logs save function
function timeStamp() {
  let today = new Date()
  let seconds = ("0" + today.getSeconds()).slice(-2);
  let timeSync = "Time Stamp: " + today.getDate() + "/"
                + (today.getMonth()+1) + "/"
                + today.getFullYear() + " @ "  
                + today.getHours() + ":"  
                + today.getMinutes() + ":" 
                + seconds + " ";

  return timeSync
}


//increment function that increases count 
function increment() {
  count += 1
  countEl.innerText = count
}

//decrement function that decreases count
function decrement () {
  if (count > 0) {
    count -= 1
  }
  countEl.innerText = count
}

//save function that saves people entered
function save() {
  let timeEntered = timeStamp()
  let countStr = count + ' - '
  saveEl.innerHTML += `<p>${countStr} ${timeEntered}</p>`
  total()
}

function total() {
  totalPeopleEntered += count
  totalCountEl.innerText = totalPeopleEntered
}

function createEventID() {
  let eventID = 1
  
}