// Get young people ie age <= 25

const people = [
	{
		firstName: 'John',
		lastName: 'Doe',
		email: 'john@email.com',
		phone: '0801-111-1111',
		age: 30,
	},
	{
		firstName: 'Jane',
		lastName: 'Doe',
		email: 'jane@email.com',
		phone: '0802-222-2222',
		age: 25,
	},
	{
		firstName: 'Bob',
		lastName: 'Foe',
		email: 'bob@email.com',
		phone: '0803-333-3333',
		age: 45,
	},
	{
		firstName: 'Sara',
		lastName: 'Soe',
		email: 'sara@email.com',
		phone: '0804-444-4444',
		age: 19,
	},
	{
		firstName: 'Jose',
		lastName: 'Koe',
		email: 'jose@email.com',
		phone: '0805-555-5555',
		age: 23,
	},
];

const youngPeople = people
	.filter(person => person.age <= 25)
	.map(person => ({
		name: `${person.firstName} ${person.lastName}`,
		email: person.email,
	}));

console.log(`From an array of people`, people);
console.log(`The Young People Are`, youngPeople);
