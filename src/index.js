import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// stateless functional component
// always return JSX

//! JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attributes
// className instead of class
// formatting

//setup objects array
const books = [
	{
		img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
		title: 'I Love You to the Moon and Back',
		author: 'Amelia Hayworth',
	},

	{
		img: 'https://m.media-amazon.com/images/I/51iP-k3nWeL.jpg',
		title: "The Judge's List",
		author: 'John Grisham',
	},
];

function BookList() {
	return (
		<section className='booklist'>
			{books.map((book) => {
				const { img, title, author } = book;
				return <Book book={book}></Book>;
			})}
			;
		</section>
	);
}

const Book = (props) => {
	const { img, title, author } = props.book;
	return (
		<article className='book'>
			<img src={img} alt='' />
			<h1>{title}</h1>
			<h3>{author}</h3>
			{/* {children} */}

			{/* {console.log(props)} */}
		</article>
	);
};

ReactDOM.render(<BookList />, document.getElementById('root'));
