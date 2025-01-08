import React from "react";
import './Tag.css';

function Tag(props) {

    function tagIteration() {
        console.log(props.tagNames)
        props.tagNames.map((tag)=> {
            return (<span>{tag}</span>);
        });
    }

    return (
        <div className="questionTag">
         {tagIteration()}
        </div>
    );
}

export default Tag;