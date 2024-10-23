import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <p className="text-gray-300">{review.text}</p>
      <p className="text-yellow-400 mt-2">Rating: {review.rating} Star{review.rating > 1 ? 's' : ''}</p>
      <p className="text-gray-500 text-sm mt-2">{review.date}</p>
    </div>
  );
};

export default ReviewCard;
