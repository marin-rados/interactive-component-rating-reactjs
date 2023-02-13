import React from 'react'
import './Rating.css';
import { useState } from 'react';

export default function Rating() {

  const [selectedRating, setSelectedRating] = useState();
  const [isSubmited, setIsSubmited] = useState(false);

  function handleRatingClicked(rating) {
    setSelectedRating(rating);
  }

  function handleFormSubmitted(e) {
    e.preventDefault();
    setIsSubmited(true);
}

  return isSubmited ? (
      <div className="thank-you-container">
        <div className="thank-you-image"></div>

          <p className="selected-rating">You selected {selectedRating} out of 5</p>

          <h1 className="thank-you-title">Thank You!</h1>
          <p>
            We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate to get in touch!
          </p>
      </div>
  ) : (
    <form onSubmit={handleFormSubmitted} className="container">
        <div className="image"></div>
        <h1 className="title">How did we do?</h1>
        <p >
            Please let us know how we did with your support request.
             All feedback is appreciated to help us improve our offering!
        </p>
        <div className="number-buttons">
          {[1,2,3,4,5].map((rating) => (
            <button 
              type="button"
              onClick={() => handleRatingClicked(rating)}
              className="rating">
                {rating}
            </button>
          ))}
        </div>

        <button
         disabled={selectedRating === undefined} className="submit">
          Submit
        </button>
    </form>
  );
}
