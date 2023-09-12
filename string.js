// variables to work with
const firstName = 'Kadi'
const lastName = 'Tamm'
const tags = 'JS, HTML, CSS'

// incorrect full name
let value = firstName + lastName

// full name
value = firstName + ' ' + lastName
value = `${firstName} ${lastName}`

// first letter of last name
value = lastName[0] 
value = lastName.charAt(0)

// last letter of last name
value = lastName.charAt(lastName.length - 1)

// index of 'a' in last name
value = lastName.indexOf('a')

// slice, output = Ta
value = lastName.substring(0, 2)
value = lastName.slice(0, 2)

// slice, output = mm
value = lastName.slice(-2)

// split
value = tags.split(',')

console.log(value)