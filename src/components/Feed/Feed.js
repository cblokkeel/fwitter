import React from 'react'
import './feed.css'

const Feed = ({ fweets }) => {
    return (
        <div className='feed'>
            {fweets.map(fweet => {
                return <div className='tweet' key={fweet.id}>
                    <p className='tweet-content'>{fweet.content}</p>
                    <p className='tweet-author'>{fweet.author}</p>
                </div>
            })}
        </div>
    );
};

export default Feed;