import React from 'react';
import data from '../../quesMockData.json';
import './QuestionCard.css';
import Tag from '../tags/Tag';

function QuestionCard() {
   
    return(
        <div className='questionCard'>
           <div className='questionCardTop'>
            <span className='tags'>
                { data.tags.map((tag)=> 
                    <Tag tagName={tag}/>
                )}
            </span>
            <span className='startup-logo'></span>
           </div>
           <div className='cardText'>
            <p id='firstTextP'>{data.text}</p>
            <p id='secondTextP'>{data.subText}</p>
           </div>
           <div className='questionCardBottom'>
            <div className='questionViews'><span className='viewsIcon'></span>{data.views} Views</div>
            <div className='aboutHow'><span className="iIcon"></span> How should you word your answer?</div>
           </div>
        </div>
    );
}

export default QuestionCard;