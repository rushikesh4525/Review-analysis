import React from 'react';
import { ReviewHighlighter } from './ReviewHighlighter';

export const ReviewList = ({ reviews }) => {
    return (
      <div className="review-list">
        <h1>Review Analysis</h1>
        {reviews.map((review, index) => (
            <>
          <ReviewHighlighter key={index} review={review} />
         <h1> </h1>
        <h1> </h1>
          </>
          
        ))}
      </div>
    );
  };