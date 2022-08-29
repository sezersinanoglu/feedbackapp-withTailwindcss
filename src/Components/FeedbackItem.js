import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import Context from "../Context/Context";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(Context);
  return (
    <div className="card bg-white text-black rounded-md p-4 m-5 text-left relative">
      <div className="rounded-full h-12 w-12 p-3  bg-pink-400 text-center text-white font-bold items-center absolute -top-2 -left-2 ">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="absolute right-3">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="absolute right-8">
        <FaEdit color="purple" />
      </button>
      <div className="">{item.text}
      </div>
    </div>
  );
};

export default FeedbackItem;
