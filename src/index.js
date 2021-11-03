import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';
import { books } from './books';
import Book from './Book';
import { greeting } from '../src/testing/testing';

//* above when we import a component (ie. Books) we can use whatever name we want with the correct path to the file; we just need to remember to 'return' the same name as we used here (regardless of the name of the component)
//* IF however, we are just importing a variable from another file (i.e., a data set, or just a created variable) then we MUST wrap the variable or const name in brackets and use THAT exact name as defined in the path filename

// stateless functional component
// always return JSX

//! JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attributes
// className instead of class
// formatting

//setup objects array

function BookList() {
	console.log(greeting);
	return (
		<section className='booklist'>
			{books.map((book) => {
				return <Book key={book.id} {...book}></Book>;
			})}
			;
		</section>
	);
}

//! only ever ONE render statment in the entire app
ReactDOM.render(<BookList />, document.getElementById('root'));
