const personsObj = [
  {
    firstName: "Harkirat",
    Gender: "Male",
  },
  {
    firstName: "Shubham",
    Gender: "Male",
  },
  {
    firstName: "Geeta",
    Gender: "Female",
  },
];

const maleNames = [];

function printMales(personsObj) {
  for (var i = 0; i < personsObj.length; i++) {
    if (personsObj[i]["Gender"] === "Male") {
      maleNames.push(personsObj[i]["firstName"]);
    }
  }
  return maleNames;
}
const ans = printMales(personsObj);
console.log(ans);
