import React, { useState, useEffect } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import { AnimatePresence, motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const [emailSent, setEmailSent] = useState(false);

  const [subjectRequired, setSubjectRequired] = useState(false);
  const [fromRequired, setFromRequired] = useState(false);

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

    if (window.innerHeight >= 1000)
      if (scrollY > window.innerHeight + window.innerHeight)
        setShowContact(true);

    if (window.innerHeight >= 800)
      if (scrollY > window.innerHeight + 1000) setShowContact(true);

    if (window.innerHeight < 800)
      if (scrollY > 800 + 1000) setShowContact(true);

    if (window.innerHeight < 600)
      if (scrollY > 600 - window.innerHeight + 800 + 1000) setShowContact(true);
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
          <div className="mt-20 flex flex-col items-center justify-center">
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

          <div className="flex flex-col md:flex-row w-full justify-evenly items-center">
            <div
              className="w-full px-16 pt-16 pb-10  shadow-lg"
              style={{ maxWidth: 800 }}
            >
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
                  From
                </motion.div>
                <motion.input
                  variants={item}
                  className="outline-none text-lg text-white bg-black w-full"
                  value={email}
                  onChange={(e) => {
                    if (fromRequired) setFromRequired(false);
                    setEmail(e.target.value);
                  }}
                ></motion.input>
                {fromRequired && (
                  <div className="text-red-300">Email is required</div>
                )}
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
                  onChange={(e) => {
                    if (subjectRequired) setSubjectRequired(false);
                    setSubject(e.target.value);
                  }}
                ></input>

                {subjectRequired && (
                  <div className="text-red-300">Subject is required</div>
                )}
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
                onClick={async () => {
                  let messageEmail = await window.Email.send({
                    SecureToken: "605eba88-94b3-4d6e-a6b6-358b9730dc21",
                    To: "contact@danishanwer.com",
                    From: email,
                    Subject: subject,
                    Body: message + " " + name,
                  });

                  console.log(messageEmail);

                  if (messageEmail == "'From' property is required")
                    setFromRequired(true);

                  if (messageEmail == "'Subject' property is required")
                    setSubjectRequired(true);

                  console.log(messageEmail.substring(0, 7));

                  if (messageEmail.substring(0, 7) == "Mailbox") {
                    setFromRequired(true);
                    setEmail("");
                  }

                  if (messageEmail.substring(0, 3) == "The")
                    setFromRequired(true);
                  setEmail("");

                  if (messageEmail == "OK") {
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                    setEmailSent(true);
                    setTimeout(() => {
                      setEmailSent(false);
                    }, 1000);
                  }
                }}
              >
                Submit
              </motion.div>

              <div style={{ height: 30 }} className="relative w-full">
                <AnimatePresence>
                  {emailSent && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -100,
                        transition: {
                          type: "spring",
                          bounce: 0.1,
                        },
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          type: "spring",
                          bounce: 0.1,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        x: 100,
                        transition: {
                          type: "spring",
                          bounce: 0.1,
                        },
                      }}
                      className="m-5 absolute top-0 w-full"
                    >
                      <div className="text-green-300 text-center">
                        Email Sent
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className=" shadow-lg float-right flex md:flex-col items-start md:w-80 md:mr-5 w-full justify-evenly">
              <div className="my-10">
                <motion.div
                  variants={item}
                  className="font-bold text-sm uppercase text-white tracking-widest my-3"
                >
                  Email
                </motion.div>
                <motion.div
                  variants={item}
                  className="text-gray-300 break-normal	"
                >
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
