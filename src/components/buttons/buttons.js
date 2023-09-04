/* eslint-disable react/button-has-type */
import React from "react";

function Buttons({
  title,
  buttonStyling,
  textStyling,
  buttonText,
  buttonIcon,
  buttonClick,
}) {
  return (
    <button
      onClick={() => buttonClick()}
      type="button"
      title={title}
      className={`${buttonStyling}`}
    >
      {buttonText && <p className={`${textStyling}`}>{buttonText}</p>}
      {buttonIcon && buttonIcon}
    </button>
  );
}

export default Buttons;
