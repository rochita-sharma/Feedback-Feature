import React from "react";
import './Feedback.css';
import Navbar from '../navbarFeedback/NavbarFeedback';
import QuestionCard from "../questionCard/QuestionCard";
import BackToQuestion from "../backToQuestion/BackToQuestion";
import AnswerCard from "../answerCard/AnswerCard";

function FeedbackPage() {
    return (
        <div className="FeedbackPage">
            <Navbar />
            <BackToQuestion />
            <div className="feedbackPageCards">
              <QuestionCard />
              <AnswerCard />
            </div>  
        </div>
    );
}

export default FeedbackPage;