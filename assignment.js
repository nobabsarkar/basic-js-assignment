

// 1) Problem  1
// 1.convert radian to degree
function radianToDegree(radian) {
      const radians = radian * 57.2958;
      return radians
}
const radianToDegreeResult = radianToDegree(0.1);
console.log(radianToDegreeResult)



// 2) Problem 2
// 2. check whether the given file name is a javascript file or not
function isJavaScriptFile(check) {
      const fileExtension = check.split('.').pop();
      if (fileExtension == 'js') {
            return true;
      } else {
            return 'write correct format'
      }
}
const total = isJavaScriptFile('sojib.js');
console.log(total)



// 3) Problem 3
// 3.calculate the total oil price that I have to pay
function oilPrice(diesel,petrol,octane) {
      const first = diesel * 114;
      const second = petrol * 130;
      const third = octane * 135;
      const totalOil = first + second + third;
      return totalOil
}
const totalOilPrice = oilPrice(0,2,1);
console.log(totalOilPrice)



// 4) Problem 4










