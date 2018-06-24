import React from 'react';
import FeedItem from './FeedItem.jsx';

const FeedList = (props) => {
    const { photos } = props;
    return (
        <div className="FeedList">
            {
                photos.map((photo, i) => {
                    return (
                        <FeedItem
                            key={`${photo.url}-${i}`}
                            photo={photo}
                        />
                    );
                })
            }
        </div>
    );
};

export default FeedList;
