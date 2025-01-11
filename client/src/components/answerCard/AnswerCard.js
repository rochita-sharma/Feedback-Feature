import AnswerUser from '../answerUser/AnswerUser';
import data from '../../answerMockData.json';
import './AnswerCard.css';

function AnswerCard() {
    return (
        <div className='answerCard'>
           <div className='answerProfile'>
             <AnswerUser />
           </div>
           <div className='answerText'>{data.text}</div>
           <div className='answerComment'>
            
           </div>
        </div>
    );
}

export default AnswerCard;