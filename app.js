// ASSIGNMENT

/*
randomGame
Write a function called randomGame 
that selects a random number between 0 and 1 every 1000 milliseconds 
and each time that a random number is picked, add 1 to a counter. 
If the number is greater than .75, 
stop the timer and console.log the number of tries 
it took before we found a number greater than .75.
*/

function randomGame() {
  let num;
  let nums = [];
  let count = 0;
  let timer = setInterval(function() {
    num = Math.random();
    nums.push(num)
    count++;
    if (num > 0.75) {
      console.log("We've tried " + count + " times to find a number > 0.75");
      console.log(nums);
      clearInterval(timer);
    }
  }, 1000 )
}

randomGame();

/*
Write a function called countdown that accepts a number as a parameter 
and every 1000 milliseconds decrements the value and console.logs it. 
Once the value is 0 it should log “DONE!” and stop.

countDown(4);
// 3
// 2
// 1
// "DONE!"
*/

function countDown(num) {
  let timer = setInterval(function() {
    if (num === 0) {
      console.log("DONE!");
      clearInterval(timer);
    }
    else {
      console.log(num);
      num--;
    }
  }, 1000)
}

countDown(5);