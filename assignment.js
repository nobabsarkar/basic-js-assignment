

// 1) Problem  1
// 1.convert radian to degree
// function radianToDegree(radian) {
//       const radians = radian * 57.2958;
//       const writeWay = radians.toFixed(2)
//       const myResult = parseFloat(writeWay)
//       return myResult
      
// }
// const radianToDegreeResult = radianToDegree(1);
// console.log(radianToDegreeResult)



// 2) Problem 2
// 2. check whether the given file name is a javascript file or not
// function isJavaScriptFile(check) {
//       const fileExtension = check.split('.').pop();
//       if (fileExtension == 'js') {
//             return true;
//       } else {
//             return 'Please write correct file format'
//       }
// }
// const total = isJavaScriptFile('assignment.js');
// console.log(total)



// 3) Problem 3
// 3.calculate the total oil price that I have to pay
// function oilPrice(diesel,petrol,octane) {
//       const first = diesel * 114;
//       const second = petrol * 130;
//       const third = octane * 135;
//       const totalOil = first + second + third;
//       return totalOil
// }
// const totalOilPrice = oilPrice(0,2,1);
// console.log(totalOilPrice)



// 4) Problem 4
function publicBusFare(people) {
      let busSpace = 50;
      let microbusSpace = 11;
      let result = people % busSpace;
      let total = result % microbusSpace;
      let fare = total * 250;
      return fare
      
}
const restPassenger = publicBusFare(10);
console.log(restPassenger)




