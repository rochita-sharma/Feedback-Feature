import data from '../../answerMockData.json';
import './AnswerFilter.css';

function AnswerFilter() {
    return (
        <div className='answerCountAndFilter'>
            <div className='answers'>Answers({data.answerCount})</div>
            <div className='sortFilter'>
                <span className='sortSpan'>Sort By:</span>
                <select>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                </select>
            </div>
        </div>
    );
}

export default AnswerFilter;
