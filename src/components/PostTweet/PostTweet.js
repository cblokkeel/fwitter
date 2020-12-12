import React from 'react'
import './posttweet.css'

const PostTweet = ({ handleChange, handlePostTweet, value }) => {
    return (
        <div className='post-tweet'>
            <form onSubmit={handlePostTweet}>
                <input type="textarea" className='post-a-tweet' placeholder='fweet something' maxLength='144' value={value} onChange={handleChange} required/>
                <button className='fweet-button' type='submit'>Fweet</button>
            </form>
        </div>
    );
};

export default PostTweet;
