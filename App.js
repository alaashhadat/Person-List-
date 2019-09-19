import React from 'react';
import '/Users/mac/Desktop/person-list-project/person-list-project/src/App.css';
const App = () => {
	return (
		<div className="App">
			<PersonList />
		</div>
	);
};
const PersonList = () => {
	const people = [
		{
			img: 22,
			name: 'John',
			job: 'developer',
		},
		{
			img: 23,
			name: 'Bill',
			job: 'Designer',
		},
		{
			img: 29,
			name: 'Dani',
			job: 'Dancer',
		},
	];
	return (
		<section>
			<Person person={people[0]} />
			<Person person={people[1]}>
				jednostavno probni tekst koji se koristi u tiskarskoj i slovoslagarskoj industriji. Lorem
				Ipsum postoji kao
			</Person>
			<Person person={people[2]} />
		</section>
	);
};
const Person = props => {
	const { img, name, job } = props.person;
	const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
	return (
		<div className="person">
			<div>
				<img src={url} alt=""></img>

				<h4>{name}</h4>
				<h4>{job}</h4>
			</div>
		</div>
	);
};

export default App;
