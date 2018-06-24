import React from 'react';
import Likes from './Likes.jsx';

const FeedItem = (props) => {
  const { photo } = props;
  const { url, likes } = photo;
  return (
    <div className="FeedItem">
      <img className="Image" src={ url } />
      <Likes totalLikes={likes} />
    </div>
  );
};

export default FeedItem;
