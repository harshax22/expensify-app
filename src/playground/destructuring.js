//Object Destructuring

// const person = {
//     name: 'Jen',
//     age: 22,
//     location: {
//         city: 'Bangalore',
//         temp: 96
//     }
// };
// const { name: firstName = 'Harsha', age } = person;
// // const name = person.name;

// console.log(`${firstName}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`The weather is ${temperature} in ${city}`);
// }

const book = {
    title: 'A Song Of Ice and Fire',
    author: 'George RR Martin',
    publisher: {
        name: 'HBO'
    }
};
const {title} = book;
const {name: publisherName = 'Self Published'} = book.publisher;

console.log(`The book ${title}'s publisher is ${publisherName}`);

//Array Destructuring

const address = [];

const [ , , state = 'Bangalore'] = address;

console.log(`You are in ${state}`);