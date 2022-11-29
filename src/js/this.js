// console.log(this)
// console.log(window)
// console.log(this.name)
// console.log(window.name)
// // console.log(name)
// function fullName(){
//   let userName = "James"
//   console.log(userName)
// }

// fullName()
// "use strick"
// function checkThis() {
//   console.log(this);
// }
// checkThis();

person = {
  checkThis: function () {
    // "use strict";
    // let self = this
    let that = this

    // console.log(this);
    function checkThisAgain() {
      this.userName = "James";
      console.log(this.userName);
    }

    checkThisAgain();
    console.log(this.userName)

  },
};
person.checkThis();
console.log(person)

const funct = person.checkThis
funct()
