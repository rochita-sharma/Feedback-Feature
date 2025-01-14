import React from "react";
import './Feedback.css';
import Navbar from '../navbarFeedback/NavbarFeedback';
import QuestionCard from "../questionCard/QuestionCard";
import BackToQuestion from "../backToQuestion/BackToQuestion";
import AnswerCard from "../answerCard/AnswerCard";
import AnswerFilter from "../answerFilter/AnswerFilter";
import Fab from "../fab/Fab";

function FeedbackPage() {
    return (
        <div className="FeedbackPage">
            <Navbar />
            <BackToQuestion />
            <div className="feedbackPageCards">
              <QuestionCard />
              <AnswerFilter />
              <AnswerCard />
              <Fab />
            </div>  
        </div>
    );
}

export default FeedbackPage;