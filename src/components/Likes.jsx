import React from 'react';

// Exercise 2: Set It Up
// write a functional component
// make it a div with a class name of Likes
// write a span and a button element inside
// export the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

const Likes = () => {
	return (
		<div className="Likes">
			<span>likes</span>
			<button className="LikesButton">
				Like
			</button>
		</div>
	);
}

export default Likes;
