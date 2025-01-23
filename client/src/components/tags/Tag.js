import React from "react";
import './Tag.css';

function Tag(props) {

    return (
        <div className="questionTag">
         {props.tagName}
        </div>
    );
}

export default Tag;