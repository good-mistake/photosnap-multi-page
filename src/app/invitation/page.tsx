"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const topRef = useRef(null);
  const midRef = useRef(null);
  const botRef = useRef(null);

  const topInView = useInView(topRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const botInView = useInView(botRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const midInView = useInView(midRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  return (
    <motion.div
      className="inviteContainer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Header />
      <main>
        <motion.div
          ref={topRef}
          initial={{ opacity: 0, y: 50 }}
          animate={topInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <section className="top">
            <div className="desc">
              <div className="borders">
                <div>
                  <h2>INVITATION</h2>
                  <p>
                    Create a your stories, Photosnap is a platform for
                    photographers and visual storytellers. It’s the simple way
                    to create and share your photos.
                  </p>
                </div>
              </div>
            </div>
            <div className="img"></div>
          </section>{" "}
        </motion.div>{" "}
        <motion.div
          ref={midRef}
          initial={{ opacity: 0, y: 50 }}
          animate={midInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <section className="mid">
            <div className="switchANDOPtion">
              <h2>GET AN INVITE</h2>
              <p>
                We’re in beta. Get your invite today Before it&apos;s too late!
              </p>
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      setError(false);
                      setSuccess(false);
                      if (!name || !email) return setError(true);
                      setSuccess(true);
                    }}
                  >
                    <label htmlFor="name">
                      <p>Name</p>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                    <label htmlFor="email">
                      <p>Email</p>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                    <button type="submit">Get Your Invite</button>
                    {error && (
                      <p className="error">Please fill out all fields.</p>
                    )}
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2>
                      Thank you! We’ve received your request and will contact
                      you soon.
                    </h2>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>{" "}
        </motion.div>{" "}
        <motion.div
          ref={botRef}
          initial={{ opacity: 0, y: 50 }}
          animate={botInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ backgroundColor: "black" }}
        >
          <section className="bot">
            <div className="invite">
              <h2>Go to Our home page and see our story</h2>
              <button onClick={() => router.push("/")}>
                <span>See Our Home </span>
                <img src={"/assets/shared/desktop/arrow.svg"} alt="arrow" />
              </button>
            </div>
          </section>{" "}
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Page;
