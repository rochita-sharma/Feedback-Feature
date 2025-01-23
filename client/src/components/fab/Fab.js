import {useState} from 'react';
import data from './menuItems.json';
import './Fab.css';
import FabMenuItem from '../fabMenuItems/FabMenuItems';

function Fab() {
    const [isOpen, setIsOpen] =  useState(false);
    const [style, setStyle] = useState("optionMenu");
    let reportIssue=require("../static/ReportAnIssue.png");
    let ShareFeedback=require("../static/ShareFeedback.png");
    let giveSuggestion=require("../static/GiveSuggestion.png");
    let contactUs=require("../static/ContactUs.png");

    const toggleOnClick = () =>{
        setIsOpen(!isOpen);
    }

     
    function handleOnClick(){
        console.log("fab menu item just clicked")
        if(style !== "optionMenu") setStyle("optionMenu");
        else setStyle("writeIssue");
    }

    return (
        <div className='floatingActionItem'>
        {  isOpen 
            ?(<div className={style}>
            <FabMenuItem title="Report an Issue" imageUrl={reportIssue} onClick={handleOnClick}/>
            <FabMenuItem title="Share Feedback" imageUrl={ShareFeedback}/>
            <FabMenuItem title="Give Suggestion" imageUrl={giveSuggestion}/>
            <FabMenuItem title="Contact Us" imageUrl={contactUs}/>
            <span className='XIcon' onClick={toggleOnClick}></span>
            </div>)
            :(<span className='fabIcon' onClick={toggleOnClick}></span>)
        }
        </div>
    );
}

export default Fab;