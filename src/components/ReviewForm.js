import { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5); // Default rating is 5 stars

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() === '') return;

    // Call the parent's onSubmit function to add the review
    onSubmit({
      text: reviewText,
      rating: parseInt(rating),
      date: new Date().toLocaleDateString(), // Add the date of submission
    });

    // Clear the form after submission
    setReviewText('');
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review here..."
        className="w-full p-4 bg-gray-800 text-white rounded-lg mb-4"
        rows="4"
        required
      />
      <div className="flex items-center justify-between">
        <label htmlFor="rating" className="text-white">Rating:</label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="bg-gray-700 text-white rounded p-2"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Star{num > 1 ? 's' : ''}
            </option>
          ))}
        </select>
        <button type="submit" className="px-4 py-2 bg-neon-blue text-black rounded-lg hover:bg-purple-600">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
