import AnswerUser from '../answerUser/AnswerUser';
import data from '../../answerMockData.json';
import './AnswerCard.css';
import ExpandableTextarea from '../expandableText/expandableText';

function AnswerCard() {
    return (
        <div className='answerCard'>
           <div className='answerProfile'>
             <AnswerUser />
           </div>
           <div className='answerText'><ExpandableTextarea text={data.text}/></div>
           <div className='answerComment'>
            <div className='likeOption'>
              <span className='likeAnswer'></span>
              <p>Like</p>
            </div>
            <div className='commentArea'>
              <span className='commentIcon'></span>
              <input placeholder='Add a comment' className='commentInput'/>
            </div>
            <button className='postButton'>Post</button>
           </div>
        </div>
    );
}

export default AnswerCard;