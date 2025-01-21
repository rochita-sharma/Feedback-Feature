import './expandableText.css';
import React, { useState } from "react";

const ExpandableText = ({ text, maxWords = 45 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split the text into words
  const words = text.split(" ");
  const isTruncated = words.length > maxWords;

  // Toggle function
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expandable"> 
      <p style={{ lineHeight: "1.6", color: "#333", fontSize: "18px" }}>
        {isExpanded || !isTruncated
          ? text
          : `${words.slice(0, maxWords).join(" ")}…`}
        {isTruncated && (
        <span
          style={{
            color: "#888", // Greyish color for the last line
          }}
        >
          <span
            onClick={toggleExpand}
            style={{
              fontWeight: "bold", // Bold black for "Show More/Less"
              color: "#000",
              cursor: "pointer",
              marginLeft: "5px",
            }}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </span>
        </span>
        )}
          
      </p>
    </div>
  );
};

export default ExpandableText;
