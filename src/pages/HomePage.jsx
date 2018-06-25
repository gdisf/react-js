import React from 'react';
import data from '../../data.json';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList';

// Exercise 2: Set It Up
// write a functional component
// make it a div with a class name of HomePage
// import ImageUploaderForm and FeedList
// include then inside of Homepage
// export the Homepage component!

// Exercise 3: Prop It Up
// Need to extract photos from data and then pass it into HomePage

const { photos } = data;

const HomePage = () => {
	return (
		<div className="HomePage">
			<ImageUploaderForm />
			<FeedList photos={photos} />
		</div>
	);
}

export default HomePage;
