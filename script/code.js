function idCheck(idNumber) {
    let id = document.getElementById('idNumber').value
    
    let year = '20'+id.slice(0, 2)
    let month = id.slice(2, 4)
    let day = id.slice(4, 6)

    let genderDigit = id.charAt(6)
    let gender = genderDigit < 5 ? "Female" : "Male"
    console.log(year, month, day, gender)
    document.querySelector('#output').value = `Born on ${year}/${month}/${day}. Appilicant is ${gender}`
}

