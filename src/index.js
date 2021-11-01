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

function BookList() {
	return (
		<section className='booklist'>
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
}

const Book = () => {
	return (
		<article className='book'>
			<Image />
			<Title />
			<Author />
		</article>
	);
};

const Image = () => {
	return (
		<img
			src='https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg'
			alt=''
		/>
	);
};

const Title = () => {
	return <h1>I Love You To the Moon and Back</h1>;
};

const Author = () => {
	return <h3>Amelia Hayworth</h3>;
};

ReactDOM.render(<BookList />, document.getElementById('root'));
