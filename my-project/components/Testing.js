import React from 'react';

function Testing() {
	const lessons = [
		'Mathematics',
		'English',
		'History',
		'Geography',
		'French',
		'Science',
	];
	return (
		<div>
			{lessons.map((lesson) => {
				return <h1>{lesson}</h1>;
			})}
		</div>
	);
}

export default Testing;
