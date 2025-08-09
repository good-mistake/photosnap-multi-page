"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [year, setYear] = useState(false);
  const [width, setWidth] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWidth(currentWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const topRef = useRef(null);
  const midRef = useRef(null);
  const compareRef = useRef(null);
  const botRef = useRef(null);

  const topInView = useInView(topRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const midInView = useInView(midRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const compareInView = useInView(compareRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const botInView = useInView(botRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const compareItem = [
    {
      p: "UNLIMITED STORY POSTING",
      basic: true,
      pro: true,
      bussiness: true,
    },
    {
      p: "UNLIMITED PHOTO UPLOAD",
      basic: true,
      pro: true,
      bussiness: true,
    },
    {
      p: "EMBEDDING CUSTOM CONTENT",
      basic: false,
      pro: true,
      bussiness: true,
    },
    {
      p: "CUSTOMIZE METADATA",
      basic: false,
      pro: true,
      bussiness: true,
    },
    {
      p: "ADVANCED METRICS",
      basic: false,
      pro: false,
      bussiness: true,
    },
    {
      p: "PHOTO DOWNLOADS",
      basic: false,
      pro: false,
      bussiness: true,
    },
    {
      p: "SEARCH ENGINE INDEXING",
      basic: false,
      pro: false,
      bussiness: true,
    },
    {
      p: "CUSTOM ANALYTICS",
      basic: false,
      pro: false,
      bussiness: true,
    },
  ];
  return (
    <motion.div
      className="pricingContainer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Header />
      <main>
        {" "}
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
                  <h2>PRICING</h2>
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
              <div className="switchBtn">
                <p
                  className={`month ${!year ? "active" : ""}`}
                  onClick={() => setYear(false)}
                >
                  Monthly
                </p>
                <button
                  className={!year ? "monthly" : "yearly"}
                  onClick={() => setYear((prev) => !prev)}
                >
                  <span></span>
                </button>
                <p
                  onClick={() => setYear(true)}
                  className={`${year ? "active" : ""} year`}
                >
                  Yearly
                </p>
              </div>
              <ul className="options">
                <li>
                  <h3>Basic</h3>
                  <p>
                    Includes basic usage of our platform. Recommended for new
                    and aspiring photographers.
                  </p>
                  <motion.div
                    key={year ? "yearly" : "monthly"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2>{year ? "$190.00" : "$19.00"}</h2>
                    <p>{year ? "per year" : "per month"}</p>
                  </motion.div>
                  <button>PICK PLAN</button>
                </li>
                <li className="pro">
                  <h3>Pro</h3>
                  <p>
                    More advanced features available. Recommended for
                    photography veterans and professionals.
                  </p>
                  <motion.div
                    key={year ? "yearly" : "monthly"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {" "}
                    <h2>{year ? "$390.00" : "$39.00"}</h2>
                    <p>{year ? "per year" : "per month"}</p>
                  </motion.div>
                  <button>PICK PLAN</button>
                </li>
                <li>
                  <h3>Business</h3>
                  <p>
                    Additional features available such as more detailed metrics.
                    Recommended for business owners.
                  </p>
                  <motion.div
                    key={year ? "yearly" : "monthly"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2>{year ? "$990.00" : "$99.00"}</h2>
                    <p>{year ? "per year" : "per month"}</p>
                  </motion.div>
                  <button>PICK PLAN</button>
                </li>
              </ul>
            </div>
          </section>{" "}
        </motion.div>{" "}
        <motion.div
          ref={compareRef}
          initial={{ opacity: 0, y: 50 }}
          animate={compareInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <section className="compare">
            {width > 700 ? (
              <div className="nameAndIntro">
                <h2>COMPARE</h2>
                <ul>
                  <li className="intro">
                    <p>THE FEATURES</p>
                    <div>BASIC</div>
                    <div>PRO</div>
                    <div>BUSINESS</div>
                  </li>
                  {compareItem.map((item, i) => (
                    <li key={i}>
                      <p>{item.p}</p>
                      <div>
                        {item.basic ? (
                          <img
                            src={`/assets/pricing/desktop/check.svg`}
                            alt="arrow"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {item.pro ? (
                          <img
                            src={`/assets/pricing/desktop/check.svg`}
                            alt="arrow"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {item.bussiness ? (
                          <img
                            src={`/assets/pricing/desktop/check.svg`}
                            alt="arrow"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="nameAndIntro">
                <ul>
                  <li className="intro">
                    <p>THE FEATURES</p>
                  </li>
                  {compareItem.map((item, i) => (
                    <li key={i}>
                      <p>{item.p}</p>
                      <ul>
                        <li>
                          <p>BASIC</p>
                          {item.basic ? (
                            <img
                              src={`/assets/pricing/desktop/check.svg`}
                              alt="arrow"
                            />
                          ) : (
                            ""
                          )}
                        </li>
                        <li>
                          <p>PRO</p>

                          {item.pro ? (
                            <img
                              src={`/assets/pricing/desktop/check.svg`}
                              alt="arrow"
                            />
                          ) : (
                            ""
                          )}
                        </li>
                        <li>
                          {" "}
                          <p>BUSINESS</p>
                          {item.bussiness ? (
                            <img
                              src={`/assets/pricing/desktop/check.svg`}
                              alt="arrow"
                            />
                          ) : (
                            ""
                          )}
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
              <h2>We’re in beta. Get your invite today!</h2>
              <button onClick={() => router.push("/stories")}>
                <span>GET AN INVITE</span>
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
