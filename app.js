// //lab1
// class Calculator {
//   constructor(_value = 0){
//     this.value = _value
//   }
//   add(num){
//     this.value += num
//     return this.value
//   }
//   subtract(num){
//     this.value -= num
//     return this.value
//   }
//   multiply(num){
//     this.value *= num
//     return this.value
//   }
//   divide(num){
//     this.value /= num
//     return this.value
//   }
//   show(){
//     console.log(this.value)
//   }
// }

// let value1 = new Calculator(10)
// value1.show()
// value1.add(2)
// value1.show()
// value1.subtract(4)
// value1.show()
// value1.multiply(3)
// value1.show()
// value1.divide(4)
// value1.show()
// console.log(value1)

//lab2
// class Sale {
//   constructor(_name,_amount,_price) {
//     this.name = _name
//     this.amount = _amount
//     this.price = _price
//   }
//   calPrice(){
//     console.log(this.name , this.amount , this.price)
//     return this.amount = this.amount * this.price
//   }
// }

// class Beverage extends Sale{
//   constructor(_name, _amount, _price) { super(_name, _amount, _price)}
// }

// let beverage = new Beverage("Pepsi",3,19)
// console.log(beverage.calPrice())

// lab1
// function isArray(input) {
//   return Array.isArray(input)
// }
// let arr = [1,2,3,4]
// let obj = { name : "John"}
// console.log(isArray(arr))
// console.log(isArray(obj))

// let user = { name: 'John', age: 27 };
// for (let key of Object.keys(user)) {
//   console.log(key); // name then age
// }
// for (let value of Object.values(user)) {
//   console.log(value); // John then 27
// }
// for (let pair of Object.entries(user)) {
//   console.log(pair); // ['name', 'John'] then ['age', 27]
// }


//lab1
// let salaries = {
//   John : 100,
//   Ann : 160,
//   Pete : 130
// }
// let result = 0
// for (let value of Object.values(salaries)){
//   console.log(value)
//   result += value
// }
// console.log(result)

//lab2
// let checkObject = (obj) => {
//   return obj.length < 0 
// }
// let arr = [1,2,3,4]
// let obj1 = { name : "John"}
// let obj2 = {}

// console.log(checkObject(arr))
// console.log(checkObject(obj1))
// console.log(checkObject(obj2))
// console.log(obj1.length)



//rest and spread
//lab1
// let multiplyNum = (...nums) => {
//   let result = 1 
//   for (num in nums){
//     // console.log(nums[num])
//     result*=nums[num]
//   }
//   console.log(result)
//   return result
// }

// multiplyNum(1,2,3,4,5)

//lab2
// let filterOutOdds = (...nums) => {
//   let result = nums.reduce((prev,curr)=>{
//     console.log(curr)
//     if(curr %2 == 0){
//       prev.push(curr)
//     }
//     return prev
//   },[])
//   console.log(result)
//   return result
  
// }

// console.log(filterOutOdds(1,2,3,4,5,6))

//lab3
// let mergeObjects = (...objs) => {
//   result = {}
//   // console.log(objs)
//   for (let i = 0 ; i < objs.length ; i++){
//     Object.assign(result,objs[i])
//   }
//   return result
// }

// console.log(mergeObjects({name:"pon"},{age :18},{sex:"male"}))

//lab4
// const num1 = [1,-2,3,4]
// const num2 = [8,3,-8,1]

// const sumNum = [...num1,...num2]
// const sumNum2 = [5,...num1,-6,-1,...num2]
// console.log(sumNum)
// console.log(sumNum2)

// let sum = sumNum.reduce((prev,curr)=>{
//   return prev += curr 
// },0)
// console.log(sum)

//lab5
// let change3ToSquare = (array) => {
//   let newArr = [...array]
//   newArr[3] = newArr[3]**2
//   return newArr
// }

// console.log(change3ToSquare([1,2,3,4,5]))

//lab6
// let profile = (name,surname,...hobbys) => {
//   count = 0
//   for (hobby in hobbys){
//     count ++
//   }
//   console.log(name, surname, hobbys, count)
//   return result = [name , surname , hobbys , count] 
// }

// console.log(profile("gap", "fulla" , "football", "basketball", "volleyball"))

//lab7
// let doubleAndReturnArgs = (arr,...args) => {
//   // console.log(arr)
//   // console.log(args)
//   for (arg in args){
//     // console.log(args[arg])
//     args[arg] = args[arg] *2
//   }
//   return arr.concat(...args)
// }

// let result = doubleAndReturnArgs([1,2,3],4,4)
// console.log(result)
// console.log(doubleAndReturnArgs([2],10,4))

//lab9
// let cloneArray = (array) => {
//   let newArray = [...array]
//   return newArray
// }

// console.log(cloneArray([1,2,3,4]))
// let arr = [1,2,3,4,5,6]
// arr2 = arr
// console.log(arr)
// console.log(cloneArray(arr))
// console.log(cloneArray(arr) === arr)
// console.log(arr2 === arr)

//lab10
// let cloneObject = (...objs) => {
//   let objClone = {...objs}
//   return objClone
// } 

// let obj = {name : "gap",age : 18,id : 1}
// console.log(obj)
// console.log(cloneObject(obj))
// console.log(cloneObject(obj)===obj)

//lab11
// let [first,second,third] = ['Maya','Marisa','Chi']
// console.log(first) //Maya
// console.log(second) //Marisa
// console.log(third) //Chi

//lab12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops) //Raindrops on roses
// console.log(whiskers) //whiskers on kittens
// console.log(aFewOfMyFavoriteThings)//[Bright copper kettles, warm woolen mittens] 

//lab13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]
// console.log(numbers) //[10,30,20]

//lab14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 }
// let { numPlanets, yearNeptuneDiscovered } = facts
// console.log(numPlanets) //8
// console.log(yearNeptuneDiscovered) //1846

//lab15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// }
// let { numPlanets, ...discoveryYears } = planetFacts
// console.log(discoveryYears) //{ yearMarsDiscovered:1659,yearNeptuneDiscovered:1846 }

//lab16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }))
// //Your name is Alejandro and you like purple
// console.log(getUserData({ firstName: 'Melissa' }))
// //Your name is Melissa and you like green
// console.log(getUserData({}))
// //Your name is undefined and you like green

//lab17
// let guest = 'Jane';
// let admin = 'Pete';

// [guest, admin] = [admin, guest];

// console.log(guest)
// console.log(admin)

//lab18
// function checkAge(user) {
//   let { firstName, lastName, age } = user
//   if (age > 18) {
//     console.log(`Hi ${firstName} ${lastName}`);
//   } else {
//     console.log("can not used");
//   }
// }

// let user1 = { firstName: "John", lastName: "Doe", age: 20 };
// let user2 = { firstName: "Jane", lastName: "Smith", age: 17 };

// checkAge(user1)
// checkAge(user2)

//lab19
// let user = {
//   name : 'John',
//   years : 27
// }
// let {name ,years : age , isAdmin = false} = user 
// console.log(name)
// console.log(age)
// console.log(isAdmin)

//lab21
// let arr = [1, [2, [[[3, 4], 5], 6]]]
// let [a, [b, [[[c, d], e], f]]] = arr

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

//lab22
// const obj = { prop : 5 , prop2 : 10}
// let { prop : a , prop2 : b } = obj

// console.log(a)
// console.log(b)

//lab23
// let a, b;
// { a, b } = { a: 1, b: 2 };

// console.log(a)
// console.log(b)

// //error

//lab24
// const [, , , a, b] = [1, 2, 3];

// console.log(a) //undefined
// console.log(b) //undefined

//lab25
// const q = { prop: 5, prop2: [10, 100] };

// let {prop : x ,prop2 : [,y]} = q

// console.log(x)
// console.log(y)

//lab26
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// let {prop : x , prop2 :{prop2 : {nested : [,y,]}} } = q

// console.log(x)
// console.log(y)

//lab27
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for (const { firstName, lastName } of names) {
//   console.log(`${firstName} ${lastName}`)
// }

//lab28
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];
// for (const { user, age = "unknown" } of users) {
//   console.log(`${user}, age: ${age}`)
// }