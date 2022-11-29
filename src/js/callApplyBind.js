// "use strict";
// function checkThis() {
//   console.log(this);
// }
// console.log(checkThis.name);
// checkThis();

// person = {
//   checkThis : function(){
//     console.log(this)
//     function checkThisAgain(){
//       console.log(this)
//     }
//     checkThisAgain()
//   }
// }
// person.checkThis()

// let name = {
//   firstName: "Dayo",
//   lastName: "Nelson",
// };
// let fullName = function (arg1, arg2) {
//   console.log(`${this.firstName} ${this.lastName} is a ${arg1} and a ${arg2}`);
// };
// // fullName("programmer", "designer");
// let skills = ["programmer", "designer"];
// fullName.call(name, skills);

//bind

let a = function(){
  console.log(this)
}
a()

let employees = {
  checkId: a,
  
  checkThis : function(){
    console.log(this)
  }
}

employees.checkThis()
employees.checkId