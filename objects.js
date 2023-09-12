const person = {
    firstname: 'Kadi',
    lastname: 'Tamm',
    age: 16,
    email: 'kaditamm@gmail.com',
    hobbies: ['Tennis', 'Korvpall'],
    aadress: {
        city: 'Tallinn',
        county: 'Harjumaa'
    },  
    getBirthYear: function(){
        return 2023 - this.age
    },
    showHobbies: function(){
        this.hobbies.forEach(function(hobbie){ 
            console.log(hobbie)
        })
    },
    showAddressData: function(){
        for (addressKey in this.aadress){
            console.log(this.aadress[addressKey])
        } 
    } 

} 

let val = person.firstname
val = person.lastname
val = person.firstname
val = person.getBirthYear()
person.showHobbies()
person.showAddressData()
console.log(val)

