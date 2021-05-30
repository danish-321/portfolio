import React, { useState, useEffect } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const container = {
    hidden: { opacity: 0, y: -100 },
    show: {
      y: 0,
      opacity: 1,

      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -100,

      transition: {
        staggerDirection: -1,
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        type: "spring",
        bounce: 0.1,
      },
    },
  };

  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
  }, []);

  const handleScroll = () => {
    let scrollY = window.scrollY;

    if (window.innerHeight > 1000)
      if (scrollY > 1000 + 1000) setShowContact(true);

    if (window.innerHeight > 600)
      if (scrollY > window.innerHeight * 3) setShowContact(true);

    if (window.innerHeight < 600)
      if (scrollY > 600 + 1000) setShowContact(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "1231231",
        e.target,
        "user_F1Le0Ligl33Ea6DDsBUiY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" style={{ minHeight: 800 }}>
      {showContact && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="h-screen flex flex-col items-center justify-evenly bg-black"
          style={{ minHeight: 800 }}
        >
          <div className="flex flex-col items-center justify-center">
            <motion.div
              variants={item}
              className="font-bold text-sm uppercase text-purple tracking-widest "
            >
              Contact
            </motion.div>
            <motion.div
              variants={item}
              className="my-1 text-white font-semibold text-3xl sm:text-5xl"
            >
              Say Hello
            </motion.div>
            <motion.div
              variants={item}
              className="font-medium mx-1 mt-3 px-1 py-1  duration-150 text-gray-300 rounded-md"
            >
              Submit the form below so I can get back to you as soon as possible
            </motion.div>
          </div>

          <div className="flex w-full items-center" style={{ maxWidth: 1000 }}>
            <div className="w-full p-10   shadow-lg">
              <motion.div
                variants={item}
                className="bg-black flex items-center border-gray-800 border p-3"
              >
                <motion.div
                  variants={item}
                  className="text-gray-300 text-xl mr-5 "
                >
                  Name
                </motion.div>
                <motion.input
                  variants={item}
                  className="outline-none text-lg text-white bg-black w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></motion.input>
              </motion.div>

              <div className="bg-black flex items-center border-gray-800 border p-3">
                <motion.div
                  variants={item}
                  className="text-gray-300 text-xl mr-5 "
                >
                  Email
                </motion.div>
                <motion.input
                  variants={item}
                  className="outline-none text-lg text-white bg-black w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></motion.input>
              </div>

              <motion.div
                variants={item}
                className="bg-black flex items-center border-gray-800 border p-3"
              >
                <div className="text-gray-300 text-xl mr-5 ">Subject</div>
                <input
                  variants={item}
                  className="outline-none text-lg text-white bg-black w-full"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                ></input>
              </motion.div>
              <motion.div
                variants={item}
                className="bg-black flex items-center border-gray-800 border p-3"
              >
                <div className="text-gray-300 text-xl mr-5 ">Message</div>
                <textarea
                  variants={item}
                  className="outline-none text-lg text-white bg-black w-full"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </motion.div>
              <motion.div
                variants={item}
                className="bg-black flex items-center justify-center border-gray-800 border p-3 text-gray-300 w-full  text-xl hover:text-white hover:bg-gray-800 duration-150 cursor-pointer"
                onClick={() => {
                  // // code fragment
                  // var data = {
                  //   service_id: "default_service",
                  //   template_id: "YOUR_TEMPLATE_ID",
                  //   user_id: "YOUR_USER_ID",
                  //   template_params: {
                  //     username: "James",
                  //     "g-recaptcha-response":
                  //       "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
                  //   },
                  // };

                  // $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
                  //   type: "POST",
                  //   data: JSON.stringify(data),
                  //   contentType: "application/json",
                  // })
                  //   .done(function () {
                  //     alert("Your mail is sent!");
                  //   })
                  //   .fail(function (error) {
                  //     alert("Oops... " + JSON.stringify(error));
                  //   });
                  // code fragment

                  // var formData = new FormData();
                  // formData.append("email", email);
                  // formData.append("name", name);
                  // formData.append("subject", subject);
                  // formData.append("message", message);

                  // const headers = {
                  //   "Content-Type": "multipart/form-data",
                  // };
                  // axios.post("mailto:contact@danishanwer.com", formData, {
                  //   headers: headers,
                  // });

                  window.Email.send({
                    SecureToken: "605eba88-94b3-4d6e-a6b6-358b9730dc21",
                    To: "contact@danishanwer.com",
                    From: email,
                    Subject: subject,
                    Body: message + " " + name,
                  }).then((message) => alert(message));

                  //  605eba88-94b3-4d6e-a6b6-358b9730dc21
                }}
              >
                Submit
              </motion.div>
            </div>

            <div className=" shadow-lg float-right" style={{ width: 300 }}>
              <div className="my-10">
                <motion.div
                  variants={item}
                  className="font-bold text-sm uppercase text-white tracking-widest my-3"
                >
                  Email
                </motion.div>
                <motion.div variants={item} className="text-gray-300 ">
                  contact@danishanwer.com
                </motion.div>
              </div>
              <div className="my-10">
                <motion.div
                  variants={item}
                  className="font-bold text-sm uppercase text-white tracking-widest my-3"
                >
                  Address
                </motion.div>
                <motion.div variants={item}>
                  <div className="text-gray-300 ">Toronto</div>
                  <div className="text-gray-300 ">Ontario, Canada</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
