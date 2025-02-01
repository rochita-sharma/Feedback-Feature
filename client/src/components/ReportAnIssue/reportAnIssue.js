import './ReportAnIssue.css';

function ReportAnIssue() {
    return (
        <div className='fabReportCard'>
          <div className='reportHeading'>
            <p>Let us know about the <b>Issue</b> you are facing right now!</p>
            <span></span>
          </div>
          <div className='chooseSection'>
            <p>Choose a section</p>
            <select>
                <option>Interview Questions</option>
                <option>option 2</option>
            </select>
            <div>
              <p>Describe the issue in detail</p>
              <input className='descriptionOfReport' placeholder='Write here...' required />
            </div>
          </div>
          <div className='emailOfReport'>
              <p>Enter your email to receive an update</p>
              <input placeholder='Enter your Email'/>
              <button className='submitEmailButton'>Submit</button>
            </div>
        </div>
    );
}

export default ReportAnIssue;