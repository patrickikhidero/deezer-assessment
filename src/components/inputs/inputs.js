import React from "react";

function Inputs({
  label,
  icon,
  button,
  title,
  type,
  placeholder,
  value,
  onChange,
  onKeyDown,
  styling,
  titleStyling,
}) {
  return (
    <div>
      <label htmlFor={label}>
        {title && (
          <p
            className={`${titleStyling} mb-1 font-PoppinsRegular text-[13px] leading-[19.5px] text-skatecityng-font-black`}
          >
            {title}
          </p>
        )}
        {icon && icon}
        <input
          id={label}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={`${styling} text-[14px] leading-[22px] py-3 px-5 appearance-none focus:outline-none`}
        />
        {button && button}
      </label>
    </div>
  );
}

export default Inputs;
