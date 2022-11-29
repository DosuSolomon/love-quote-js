// console.log("task1")
// console.log("task2")
// console.log("task3")
// console.log("task4")
/*
//Blocking of code
console.log("start operation")

function sleep(millisecond){
  let startTime = new Date().getTime()
  console.log("operation is running")

  while(new Date().getTime() < startTime + millisecond){
    console.log("in progress")
  }

  console.log("operation is done")
}

sleep(1000)

console.log("Do something else....")
*/
console.log("start operation")

function sleep(millisecond){
  console.log("operation is running")
  setTimeout(()=>{
    console.log("operation is done")
  }, millisecond)
}
sleep(1000)
console.log("Do something else")
