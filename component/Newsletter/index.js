import React from "react";
import css from "./newsletter.scss";

const Newsletter = () => {
  return (
    <div className={css.newsletter}>
      <input type="text" placeholder="Your O365 email" />
      <input type="submit" value="send" />
    </div>
  );
};

export default Newsletter;
