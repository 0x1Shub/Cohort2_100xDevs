let sum = 0;
function count(counter) {
  for (var i = 0; i <= counter; i++) {
    sum = sum + i;
  }
  return sum;
}
var ans = count(1000);
console.log(ans);
