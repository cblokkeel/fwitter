import React from 'react'
import './feed.css'

const Feed = ({ tweets }) => {
    return (
        <div className='feed'>
            {tweets.map(tweet => {
                return <div className='tweet' key={tweet.id}>
                    <p className='tweet-content'>{tweet.content}</p>
                    <p className='tweet-author'>{tweet.author}</p>
                </div>
            })}
        </div>
    );
};

export default Feed;