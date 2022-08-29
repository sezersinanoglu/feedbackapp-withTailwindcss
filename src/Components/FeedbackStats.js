import { useContext } from "react";
import Context from "../Context/Context";

function FeedbackStats() {
  const { feedback } = useContext(Context);

  const average = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  );

  return (
    <div className="flex justify-between m-3">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
