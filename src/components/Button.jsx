import React from "react";

const Button = ({ styles }) => (
  <div>
    <a href="https://devfolio.co/discover">
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        Register Now
      </button>
    </a>
  </div>
);

export default Button;
