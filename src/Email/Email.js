import React from "react";
import { email } from "./businexEmail.js";

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
