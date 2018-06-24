import React from 'react';
import Likes from './Likes.jsx';

const FeedItem = (props) => {
  const { photo } = props;
  const { url, likes, id, userLiked } = photo;
  return (
    <div className="FeedItem">
      <img className="Image" src={ url } />
      <Likes totalLikes={likes} id={id} userLiked={userLiked} />
    </div>
  );
};

export default FeedItem;
