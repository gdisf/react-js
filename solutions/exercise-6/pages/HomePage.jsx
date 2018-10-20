import React, { Component } from 'react';
import data from '../../../data.json';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList';

class HomePage extends Component {
	render() {
		const { photos } = data;
		return (
			<div className="HomePage">
				<ImageUploaderForm />
				<FeedList photos={photos} />
			</div>
		);
	}
}

export default HomePage;
