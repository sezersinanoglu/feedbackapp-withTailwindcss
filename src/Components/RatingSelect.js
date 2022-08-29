import React, { useContext, useEffect, useState } from "react";
import Context from '../Context/Context'

const RatingSelect = (select) => {
  const [selected, setSelected] = useState(10);

  const {feedbackEdit} = useContext(Context)

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className="flex flex-wrap justify-center p-5">
      {Array.from({ length: 10 }, (_, i) => (
        <li
          className="bg-gray-300 m-2 p-3 rounded-full h-12 w-12 text-center text-black items-center hover:bg-pink-400 hover:text-white ease-in duration-300 "
          key={`rating-${i + 1}`}
        >
          <input
            type="radio"
            className="outline-none hidden"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label className="cursor-pointer" htmlFor={`num${i + 1}`}>
            {i + 1}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;
