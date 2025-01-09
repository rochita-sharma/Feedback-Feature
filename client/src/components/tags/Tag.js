import React from "react";
import './Tag.css';

function Tag(props) {

    // console.log('props:',props);
    
    return (
        <div className="questionTag">
         {props.tagName}
        </div>
    );
}

export default Tag;