import './reportAnIssue.css';

function reportAnIssue() {
    return (
        <div className='fabReportCard'>
          <div className='reportHeading'>
            <p>Let us know about the <bold>Issue</bold> you are facing right now!</p>
            <span></span>
          </div>
          <div className='chooseSection'>
            <p>Choose a section</p>
            <select>
                <option>Interview Questions</option>
                <option>option 2</option>
            </select>
          </div>
          <div className='descriptionOfReport'>
            <p>Describe the issue in detail</p>
            <input placeholder='Write here...' required />
          </div>
          <div className='emailOfReport'>
            <p>Enter your email to receive an update</p>
            <input placeholder='Enter your Email'/>
          </div>
          <button>Submit</button>
        </div>
    );
}

export default reportAnIssue;