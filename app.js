const fs = require('fs');

const maleName = ['Robert', 'Patryk', 'Zenon', 'Łukasz', 'Mateusz'];
const femaleName = ['Kornelia', 'Weronika', 'Adriana', 'Andżelika', 'Paulina'];
const lastName = ['Nowak', 'Turkiewicz', 'Johnson', 'Stankiwicz', 'Woźniak']

const people = [];

const randChoice = () => {

    for (let i = 0; i < 21; i++) {

    let gender = Math.floor(Math.random() * 2);

    let firstName = gender === 0 ? maleName[Math.floor(Math.random() * maleName.length)] : femaleName[Math.floor(Math.random() * femaleName.length)];
    let surname = lastName[Math.floor(Math.random() * lastName.length)];
    let age = Math.floor(Math.random() * 60 + 18);
    let emailAdress = `${firstName}${surname}@gmail.com`;
    

    people.push({
        firstName: firstName,
        lastName: surname,
        gender: gender === 0 ? 'M' : 'F',
        age: age,
        email: emailAdress.toLowerCase(),
        })
    }
   return people;
};

fs.writeFile('people.json', JSON.stringify(randChoice()), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });