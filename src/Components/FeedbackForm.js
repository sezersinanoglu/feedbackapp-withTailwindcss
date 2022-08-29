import { useState, useContext, useEffect } from "react";
import Context from '../Context/Context'
import RatingSelect from "./RatingSelect";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(Context);

  useEffect(()=> {
   if(feedbackEdit.edit === true) {
    setBtnDisabled(false);
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating)
   }
  },[feedbackEdit])

  // prettier-ignore
  const handleTextChange = ({ target: { value } }) => { // 👈  get the value
    if (value === '') {
      setBtnDisabled(true)
      setMessage(null)
      
  // prettier-ignore
    } else if (value.trim().length < 10) { // 👈 check for less than 10
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      // NOTE: reset to default state after submission
      setBtnDisabled(true); // 👈  add this line to reset disabled
      setRating(10); //👈 add this line to set rating back to 10
      setText("");
    }
  };
  return (
    <div className="card bg-white rounded-xl m-3 p-4 flex flex-col ">
    <div className="card-header">
      <h2 className="font-bold mt-2 text-black text-center">How would you rate your service with us?</h2>
      <RatingSelect />
    </div>
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row border  border-gray-300 rounded-lg">
          <input
            onChange={handleTextChange}
            type="text"
            className="text-sm flex-1 p-2 text-black"
            placeholder="Write a review"
            value={text}
          />
          <button type="submit" className="bg-gray-400 text-sm p-2 rounded-md" disabled={btnDisabled}>
            Sent
          </button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </div>
  </div>
  );
};

export default FeedbackForm;
