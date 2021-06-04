import React from "react";
import email from "./businexEmail.html";

const Email = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: email,
      }}
    ></div>
  );
};

export default Email;
