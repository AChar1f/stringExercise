

let year = '20'+idNumber.slice(0, 2)
let month = idNumber.slice(2, 4)
let day = idNumber.slice(4, 6)

let genderDigit = parseInt(idNumber.charAt(6))
let gender = genderDigit < 5 ? "Female" : "Male"

console.log(year, month, day, gender)

// 
