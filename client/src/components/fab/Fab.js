import {useState} from 'react';
import data from './menuItems.json';
import './Fab.css';

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

    function FabMenuItem(props){
        return (
        props.style === 'optionMenu'
        ? <div className='fabMenuItem' onClick={props.onClick}>
            <p style={{backgroundColor:"white", padding: "8px", borderRadius: "6px", marginRight:"5px"}}>{props.title}</p>
            <span className='fabMenuIcons'>{props.imageUrl && <img src={props.imageUrl} alt="Dynamic" style={{maxWidth:"100%", width:'50px', height:'50px', borderRadius:"50%"}}/>}</span>
          </div>
        :<div className='fabMenuItem' onClick={props.onClick}>
           <span className='fabMenuIcons'>{props.imageUrl && <img src={props.imageUrl} alt="Dynamic" style={{maxWidth:"100%", width:'50px', height:'50px', borderRadius:"50%"}}/>}</span>
        </div>
    );
    }

    return (
        <div className='floatingActionItem'>
        {  isOpen 
            ?(<div className={style}>
                <FabMenuItem title="Report an Issue" imageUrl={reportIssue} style={style} onClick={handleOnClick}/>
                <FabMenuItem title="Share Feedback" imageUrl={ShareFeedback} style={style} onClick={handleOnClick}/>
                <FabMenuItem title="Give Suggestion" imageUrl={giveSuggestion} style={style} onClick={handleOnClick}/>
                <FabMenuItem title="Contact Us" imageUrl={contactUs} style={style} onClick={handleOnClick}/>
            <span className='XIcon' onClick={toggleOnClick}></span>
            </div>)
            :(<span className='fabIcon' onClick={toggleOnClick}></span>)
        }
        </div>
    );
}

export default Fab;