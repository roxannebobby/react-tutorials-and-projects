import React from 'react';

const Book = ({ img, title, author }) => {
	// attribute, eventHandler
	// onClick, onMouseOver uses
	const clickHandler = (e) => {
		console.log(e);
		console.log(e.target);
		alert('hello world');
	};

	const complexExample = (author) => {
		console.log(author);
	};
	return (
		<article
			className='book'
			onMouseOver={() => {
				console.log(title);
			}}
		>
			<img src={img} alt='' />
			<h1 onClick={() => console.log({ title })}>{title}</h1>
			<h3>{author}</h3>
			<button type='button' onClick={clickHandler}>
				example
			</button>
			<button type='button' onClick={() => complexExample(author)}>
				more complex example
			</button>
		</article>
	);
};

//* h1 above has an inline example
//* button above has a handler variable example

export default Book;
