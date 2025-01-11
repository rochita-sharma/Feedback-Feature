import data from '../../answerMockData.json';
import './AnswerUser.css';

function AnswerUser() {
    return (
        <div className='profileOfAnswerCard'>
            <div className='userProfileDetails'>
            <span className='profileImage'></span>
            <div className='profileName'>
               {data.name}(You)
               <div className='answeringDate'>{data.date}</div>
            </div>
            </div>
            <div className='editAnswer'><span className='editIcon'></span>Edit</div>
        </div>
    )
}

export default AnswerUser;