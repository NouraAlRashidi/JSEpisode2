/*************************************
* logger(array)
*
* - Accepts an array
* - Logs every element of the array
************************************/
const logger = function (array) {
  // Your code here
  // function (array {
  //for int i = 0, i<array length, i++
  //log whatever is in array[i]
  array.forEach(myarray => console.log(myarray));
};


/*************************************
* toCelsius(temperatures)
*
* - Accepts an array of temperatures
*   in degrees Fahrenheit
* - Returns an array of temperatures
*   in degrees Celsius
*
* The conversion is:
*   C = (F - 32) * (5/9)
  C/(5/9)+32 ----> C*(9/5) + 32
************************************/
const toCelsius = function (temperatures) {
  // Your code here
  //temperatures.forEach(temp=> console.log(temp));
  return temperatures.map(onetemp => ((onetemp-32)*(5/9)));
}


/**************************************
* hottestDays(temperatures, threshold)
*
* - Accepts an array of temperatures
* - Accepts a threshold temperature
* - Returns an array of temperatures
*   that exceed the threshold
***************************************/
const hottestDays = function (temperatures, threshold) {
  // Your code here
  return  temperatures.filter(onetemp => onetemp> threshold)
  }


/******************************************
* logHottestDays(temperatures, threshold)
*
* - Accepts an array of temperatures
*   IN DEGREES FAHRENHEINT
* - Accepts a threshold temperature
*   IN DEGREES FAHRENHEINT
* - Logs temperatures that exceed the
*   threshold to the console
*   IN DEGREES CELSIUS
*
* hint: you can combine
*       all previous functions
*******************************************/
const logHottestDays = function (temperatures, threshold) {
  // Your code here
return logger(toCelsius(hottestDays(temperatures, threshold)));
   //array.map(onetemp => ((onetemp-32)*(5/9)));

}


export { logger, toCelsius, hottestDays, logHottestDays }
