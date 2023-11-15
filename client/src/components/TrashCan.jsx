import React from "react";

const TrashCan = (props) => {
  return (
    <div>
      <button onClick={() => props.removeFromCart(props.index)} className="btn">
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/40C057/external-trash-can-homeware-tanah-basah-glyph-tanah-basah.png"
          alt="external-trash-can-homeware-tanah-basah-glyph-tanah-basah"
        />
      </button>
    </div>
  );
};

export default TrashCan;
