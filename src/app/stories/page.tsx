"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Page = () => {
  const router = useRouter();
  const stories = [
    {
      h3: "April 16th 2020",
      h4: "The Mountains",
      p: "by John Appleseed",
      id: "a",
    },
    {
      h3: "April 14th 2020",
      h4: "Sunset Cityscapes",
      p: "by Benjamin Cruz",
      id: "b",
    },
    {
      h3: "April 11th 2020",
      h4: "18 Days Voyage",
      p: "by Alexei Borodin",
      id: "c",
    },
    {
      h3: "April 9th 2020",
      h4: "Architecturals",
      p: "by Samantha Brooke",
      id: "d",
    },
    {
      h3: "April 7th 2020",
      h4: "World Tour 2019",
      p: "by Timothy Wagner",
      id: "e",
    },
    {
      h3: "April 3rd 2020",
      h4: "Unforeseen Corners",
      p: "by William Malcolm",
      id: "f",
    },
    {
      h3: "March 29th 2020",
      h4: "King on Africa: Part II",
      p: "by Tim Hillenburg",
      id: "g",
    },
    {
      h3: "March 21st 2020",
      h4: "The Trip to Nowhere",
      p: "by Felicia Rourke",
      id: "h",
    },
    {
      h3: "March 19th 2020",
      h4: "Rage of The Sea",
      p: "by Mohammed Abdul",
      id: "i",
    },
    {
      h3: "March 16th 2020",
      h4: "Running Free",
      p: "by Michelle",
      id: "j",
    },
    {
      h3: "March 11th 2020",
      h4: "Behind the Waves",
      p: "by Lamarr Wilson",
      id: "k",
    },
    {
      h3: "March 9th 2020",
      h4: "Calm Waters",
      p: "by Samantha Brooke",
      id: "l",
    },
    {
      h3: "March 5th 2020",
      h4: "The Milky Way",
      p: "by Benjamin Cruz",
      id: "m",
    },
    {
      h3: "March 4th 2020",
      h4: "Night at The Dark Forest",
      p: "by  Mohammed Abdul",
      id: "n",
    },
    {
      h3: "March 1st 2020",
      h4: "Somwarpet’s Beauty",
      p: "by Michelle",
      id: "o",
    },
    {
      h3: "February 25th 2020",
      h4: "Land of Dreams",
      p: "by William Malcolm",
      id: "p",
    },
  ];
  const ulRef = useRef(null);
  const isInView = useInView(ulRef, { once: true, margin: "-50px" });
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className="storiesContainer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {" "}
      <Header />
      <main>
        <section className="top">
          <div>
            <h6>LAST MONTH’S FEATURED STORY</h6>
            <h2>HAZY FULL MOON OF APPALACHIA</h2>
            <p className="march">
              March 2nd 2020 <span>by John Appleseed</span>
            </p>
            <p className="area">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>
            <button
              className="storiesBtn"
              onClick={() => router.push("/stories")}
            >
              READ THE STORY
              <img src={"/assets/shared/desktop/arrow.svg"} alt="arrow" />
            </button>
          </div>
        </section>
        <div className="bot">
          <motion.ul
            ref={ulRef}
            variants={listVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {stories.map((story) => {
              return (
                <motion.li
                  key={story.id}
                  className={story.id}
                  variants={itemVariants}
                  whileHover={{ y: -24 }}
                  transition={{
                    type: "tween",
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <div>
                    <section>
                      {" "}
                      <h3>{story.h3}</h3>
                      <h4>{story.h4}</h4>
                      <p>{story.p}</p>
                    </section>
                    <button>
                      <span>READ STORY</span>{" "}
                      <img
                        src={"/assets/shared/desktop/arrow.svg"}
                        alt="arrow"
                      />
                    </button>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>{" "}
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Page;
