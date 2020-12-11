import React from 'react'
import './posttweet.css'

const PostTweet = () => {
    return (
        <div className='post-tweet'>
            <form>
                <input type="textarea" className='post-a-tweet' placeholder='fweet something' maxLength='144' required/>
                <button className='fweet-button' type='submit'>Fweet</button>
            </form>
        </div>
    );
};

export default PostTweet;
