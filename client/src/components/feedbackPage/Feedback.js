import React from "react";
import './Feedback.css';
import Navbar from "../navbarFeedback/NavbarFeedback";
import QuestionCard from "../questionCard/QuestionCard";
import BackToQuestion from "../backToQuestion/BackToQuestion";

function FeedbackPage() {
    return (
        <div className="FeedbackPage">
            <Navbar />
            <BackToQuestion />
            <div className="feedbackPageCards">
              <QuestionCard />
            </div>
        </div>
    );
}

export default FeedbackPage;