const arr = [10, 50, 25, 70, 1];
let largest = -1;
function largestNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
var ans = largestNum(arr);
console.log(ans);
