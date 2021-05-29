import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  return (
    <div
      id="contact"
      className="h-screen flex flex-col items-center justify-evenly bg-black"
      style={{ minHeight: 800 }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-sm uppercase text-purple tracking-widest ">
          Contact
        </div>
        <div className="my-1 text-white font-semibold text-3xl sm:text-5xl">
          Say Hello
        </div>
        <div className="font-medium mx-1 mt-3 px-1 py-1  duration-150 cursor-pointer text-gray-300 rounded-md">
          Submit the form below so I can get back to you as soon as possible
        </div>
      </div>

      <div className="flex w-full items-center" style={{ maxWidth: 1000 }}>
        <div className="w-full p-10   shadow-lg">
          <div className="bg-black flex items-center border-gray-800 border p-3">
            <div className="text-gray-300 text-xl mr-5 ">Name</div>
            <input
              className="outline-none text-lg text-white bg-black w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="bg-black flex items-center border-gray-800 border p-3">
            <div className="text-gray-300 text-xl mr-5 ">Email</div>
            <input
              className="outline-none text-lg text-white bg-black w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="bg-black flex items-center border-gray-800 border p-3">
            <div className="text-gray-300 text-xl mr-5 ">Subject</div>
            <input
              className="outline-none text-lg text-white bg-black w-full"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="bg-black flex items-center border-gray-800 border p-3">
            <div className="text-gray-300 text-xl mr-5 ">Message</div>
            <textarea
              className="outline-none text-lg text-white bg-black w-full"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div
            className="bg-black flex items-center justify-center border-gray-800 border p-3 text-gray-300 w-full  text-xl hover:text-white hover:bg-gray-800 duration-150 cursor-pointer"
            onClick={() => {
              var formData = new FormData();
              formData.append("email", email);
              formData.append("name", name);
              formData.append("subject", subject);
              formData.append("message", message);

              const headers = {
                "Content-Type": "multipart/form-data",
              };
              axios.post("mailto:contact@danishanwer.com", formData, {
                headers: headers,
              });
            }}
          >
            Submit
          </div>
        </div>

        <div className=" shadow-lg float-right" style={{ width: 300 }}>
          <div className="my-10">
            <div className="font-bold text-sm uppercase text-white tracking-widest my-3">
              Email
            </div>
            <div className="text-gray-300 ">contact@danishanwer.com</div>
          </div>
          <div className="my-10">
            <div className="font-bold text-sm uppercase text-white tracking-widest my-3">
              Address
            </div>
            <div>
              <div className="text-gray-300 ">Toronto</div>
              <div className="text-gray-300 ">Ontario, Canada</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
