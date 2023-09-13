// function 

let id = '44501234215'
let gender

function customerGender(id){
    if (id.length === 11){
        // returns the gender
        if (id[0] % 2 === 0){
            gender = 'female'
            return gender
        } else{
            gender = 'male'
            return gender
        } 
    } else {
        return 'Unacceptable idcode.'
    } 
}

function customerBirthyear(id){
    if (customerGender != 'Unacceptable idcode.'){
        // returns the birthyear
        birthyear = id.slice(1, 3);
        return birthyear
    } else {
        return 'Something went wrong'
    } 
} 

function customerBirthmonth(id){
    if (customerGender != 'Unacceptable idcode.'){
        // returns the birthmonth
        birthmonth = id.slice(3, 5);
        return birthmonth
    } else {
        return 'Something went wrong'
    } 
}

function customerBirthday(id){
    if (customerGender != 'Unacceptable idcode.'){
        // returns the birthday
        birthday = id.slice(5, 7);
        return birthday
    } else {
        return 'Something went wrong'
    } 
} 

function customerBirthplace(id){
    if (customerGender != 'Unacceptable idcode.'){
        // returns the birthplace
        birthplace = id.slice(7, 10);
        return birthplace
    } else {
        return 'Something went wrong'
    } 
} 

function customerControlcode(id){
    if (customerGender != 'Unacceptable idcode.'){
        // returns the idcode control code
        birthControlcode = id.slice(10, 11);
        return birthControlcode
    } else {
        return 'Something went wrong'
    } 
} 

console.log('The customer is a ' + (customerGender(id)) + '.')
console.log("They were born in the year '" + (customerBirthyear(id)) + '')
console.log(customerBirthmonth(id))
console.log(customerBirthday(id))
console.log(customerBirthplace(id))
console.log(customerControlcode(id))

