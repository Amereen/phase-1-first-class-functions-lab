// Code your solution in this file!
let names = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function (names) {
  let newArray = names.slice(0, 2)
  console.log(newArray)
  return newArray

}
// let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnLastTwoDrivers = function (names) {
  let lastDriver = names.slice(2, 4)
  console.log(lastDriver)
  return lastDriver
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
// const selectingDrivers = function (selecting) {
// return selectingDrivers

console.log(returnLastTwoDrivers(names))

const createFareMultiplier = function (fare) {
  return function () {
    return fare * fare
  }
}
const fareDoubler= function(createFareMultiplier){
let double = 2
  return createFareMultiplier * double 

}
 const fareTripler= function(createFareMultiplier){
  let triple=  3
  return createFareMultiplier * triple 
 }

 const selectDifferentDrivers = function (names, returnLastTwoDrivers){
  return returnLastTwoDrivers(names)

 }