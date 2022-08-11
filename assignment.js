// 1) Problem  1
function radianToDegree(radian) {
      const radians = radian * 57.2958;
      const writeWay = radians.toFixed(2)
      const myResult = parseFloat(writeWay)
      return myResult
}
const radianToDegreeResult = radianToDegree(1);
console.log(radianToDegreeResult)



// 2) Problem 2
function isJavaScriptFile(check) {
      const fileExtension = check.split('.').pop();
      if (fileExtension == 'js') {
            return true;
      } else {
            return 'Please write correct file format'
      }
}
const total = isJavaScriptFile('assignment.js');
console.log(total)



// 3) Problem 3
function oilPrice(diesel,petrol,octane) {
      const dieselOilPrice = 114;
      const petrolOilPrice = 130;
      const octaneOilPrice = 135;

      const firstOilPrice = diesel * dieselOilPrice;
      const secondOilPrice = petrol * petrolOilPrice;
      const thirdOilPrice = octane * octaneOilPrice;

      const totalOilPrice = firstOilPrice + secondOilPrice + thirdOilPrice
      return totalOilPrice
}
const myTotalOilPrice = oilPrice(2, 2, 2);
console.log(myTotalOilPrice)




// 4) Problem 4
function publicBusFare(people) {
      let busSpace = 50;
      let microbusSpace = 11;
      let result = people % busSpace;
      let total = result % microbusSpace;
      let totalResult = total * 250;
      return totalResult
}
const restPassenger = publicBusFare(62);
console.log(restPassenger)



 // 5) Problem 5
const person1 = { name: 'Tom', friend: 'Rock' };
const person2 = { name: 'Rock', friend: 'Tom' };

function isBestFriend(friendList1, friendList2) {
      if (typeof friendList1 !== 'object' || typeof friendList2 !== 'object'){
            const errorMassage = 'Error: please enter a valid name';
            return errorMassage
      } else if (person1.name === person2.friend && person1.friend === person2.name) {
            return true;
      } else {
            return false
      }
}
const sendObject = isBestFriend(person1,person2)
console.log(sendObject)







