import React from "react";

const ResetButton = ({ count, onClick }) => {
  const buttonStyle = { backgroundColor: "lightgreen" };
  return (
    <div>
      {count > 0 && (
        <button style={buttonStyle} onClick={onClick}>
          Reset
        </button>
      )}
    </div>
  );
};

export default ResetButton;
