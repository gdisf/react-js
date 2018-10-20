import React from 'react';
import FeedItem from './FeedItem.jsx';

const FeedList = (props) => {
  const { photos } = props;
  return (
    <div className="FeedList">
      {
        photos.map((photo, i) =>
          <FeedItem photo={photo} key={i} />
        )
      }
    </div>
  );
};

export default FeedList;
