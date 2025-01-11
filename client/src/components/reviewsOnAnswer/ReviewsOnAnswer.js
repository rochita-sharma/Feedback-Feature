import './ReviewsOnAnswer.css';

function ReviewsOnAnswer() {

    return(
        <div className='reviewSection'>
            <button className='likeButton'><span></span></button>
            <div className='commentSection'>
                <span className='commentIcon'></span>
                <input className='commentPlaceholder'></input>
            </div>
            <button className='postButton'></button>
        </div>
    );
}

export default ReviewsOnAnswer;