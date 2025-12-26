import { useState } from "react";

const ToggleText = () => {
  const [close, setclose] = useState(true);
  const changeClose = () => {
    setclose(!close);
  };
  return (
    <div>
      <h2>
        Title <button onClick={changeClose}>{close ? "hide" : "open"}</button>
      </h2>
      {close && <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere
        dolor ab? Quidem ea animi nostrum aspernatur nisi culpa esse odio?
        Ducimus, laborum quaerat. Veniam sed tempora nam quo ipsum!
        </p>}
    </div>
  );
};

export default ToggleText;
