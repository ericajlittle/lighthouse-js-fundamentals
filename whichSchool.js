function whichSchool(age) {
  if (age < 13) {
    result("Elementary School");
  } else if (age >= 13 && age <= 18) {
    result("Secondary School");
  } else {
    result("Lighthouse Labs");
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));