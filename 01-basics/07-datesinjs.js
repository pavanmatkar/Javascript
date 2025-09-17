// Dates

let myDate = new Date()
// console.log(myDate);    //2025-09-17T13:52:40.257Z
// console.log(myDate.toString());     //Wed Sep 17 2025 19:04:39 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());     //Wed Sep 17 2025
// console.log(myDate.toLocaleString());  //9/17/2025, 7:05:53 PM
// console.log(myDate.toLocaleDateString());     //9/17/2025
// console.log(myDate.toLocaleTimeString());     //7:24:57 PM
// console.log(typeof myDate);     //object

// let myCreateDate = new Date(2023, 0, 23)    //1/23/2023, 12:00:00 AM
// let myCreateDate = new Date(2023, 0, 23, 5, 3) //1/23/2023, 5:03:00 AM
// let myCreateDate = new Date("2023-01-14")   //1/14/2023, 5:30:00 AM
let myCreateDate = new Date("01-14-2023")   //1/14/2023, 12:00:00 AM
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);   //1758120765201
// console.log(myCreateDate.getTime());    //1673634600000
// console.log(Math.floor(Date.now()/1000));   //1758120987

let newDate = new Date()
// console.log(newDate);   //2025-09-17T14:58:20.675Z
// console.log(newDate.getMonth() + 1);    //9
// console.log(newDate.getDay());  //3 i.e. wednesday

// console.log(`${newDate.getDay()} and the time`);    //3 and the time

date = newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(date);  //9/17/2025, 8:36:14 PM

