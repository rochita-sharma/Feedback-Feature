import React from "react";
import './Feedback.css';
import Navbar from "../navbarFeedback/navbarFeedback";
import QuestionCard from "../questionCard/QuestionCard";

function FeedbackPage() {
    return (
        <div className="FeedbackPage">
            <Navbar />
            <div className="feedbackPageCards">
              <QuestionCard />
            </div>
        </div>
    );
}

export default FeedbackPage;