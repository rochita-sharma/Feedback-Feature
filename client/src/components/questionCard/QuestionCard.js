import React from 'react';
import data from '../../quesMockData.json';
import './QuestionCard.css';
import Tag from '../tags/Tag';

function QuestionCard() {
   
    return(
        <div className='questionCard'>
           <div className='questionCard-top'>
            <span className='tags'>
                { data.tags.map((tag)=> 
                    <Tag tagName={tag}/>
                )}
            </span>
            <span className='startup-logo'></span>
           </div>
           <p id='firstTextP'>{data.text}</p>
           <p id='secondTextP'>{data.subText}</p>
           <div className='questionCard-bottom'>
            <span></span>
            <span></span>
           </div>
        </div>
    );
}

export default QuestionCard;