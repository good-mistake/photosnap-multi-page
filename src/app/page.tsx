"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const beautifulRef = useRef(null);
  const beautifulInView = useInView(beautifulRef, { once: true });

  const designedRef = useRef(null);
  const designedInView = useInView(designedRef, { once: true });
  const midRef = useRef(null);
  const midInView = useInView(midRef, { once: true });

  const bottomRef = useRef(null);
  const bottomInView = useInView(bottomRef, { once: true });
  return (
    <div className="home">
      <Header />
      <main className="mainHome">
        <section className="top">
          <div className="create">
            <div className="desc">
              <div className="borders">
                <div>
                  <h2>Create and share your photo stories. </h2>
                  <p>
                    Photosnap is a platform for photographers and visual
                    storytellers. We make it easy to share photos, tell stories
                    and connect with others.
                  </p>
                  <button
                    className="invitationBtn"
                    onClick={() => router.push("/invitation")}
                  >
                    <span>GET AN INVITE</span>

                    <img src={"/assets/shared/desktop/arrow.svg"} alt="arrow" />
                  </button>
                </div>
              </div>
            </div>
            <div className="img"></div>
          </div>
          <motion.div
            className="beautiful"
            ref={beautifulRef}
            initial={{ opacity: 0, y: 50 }}
            animate={beautifulInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {" "}
            <div className="img"></div>
            <div className="desc">
              <div>
                <h2>BEAUTIFUL STORIES EVERY TIME </h2>
                <p>
                  We provide design templates to ensure your stories look
                  terrific. Easily add photos, text, embed maps and media from
                  other networks. Then share your story with everyone.
                </p>
                <button
                  className="storiesBtn"
                  onClick={() => router.push("/stories")}
                >
                  VIEW THE STORIES
                  <img src={"/assets/shared/desktop/arrow.svg"} alt="arrow" />
                </button>
              </div>
            </div>{" "}
          </motion.div>{" "}
          <motion.div
            className="designed"
            ref={designedRef}
            initial={{ opacity: 0, y: 50 }}
            animate={designedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {" "}
            <div className="desc">
              <div>
                <h2>DESIGNED FOR EVERYONE </h2>
                <p>
                  Photosnap can help you create stories that resonate with your
                  audience. Our tool is designed for photographers of all
                  levels, brands, businesses you name it.
                </p>
                <button
                  className="storiesBtn"
                  onClick={() => router.push("/stories")}
                >
                  VIEW THE STORIES{" "}
                  <img src={"/assets/shared/desktop/arrow.svg"} alt="arrow" />
                </button>
              </div>
            </div>{" "}
            <div className="img"></div>
          </motion.div>{" "}
        </section>
        <motion.section
          className="mid"
          ref={midRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={midInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ul className="Midlist">
            <ul>
              <motion.li
                className="john"
                initial={{ x: -50, opacity: 0 }}
                animate={midInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                {" "}
                <div>
                  <h4>The Mountains</h4>
                  <p>by John Appleseed</p>
                  <button onClick={() => router.push("/stories")}>
                    <span>READ STORY</span>
                    <img src={"/assets/shared/desktop/arrow.svg"} alt="arrow" />
                  </button>
                </div>
              </motion.li>
              <motion.li
                className="cruz"
                initial={{ x: 50, opacity: 0 }}
                animate={midInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div>
                  <h4>Sunset Cityscapes</h4>
                  <p>by Benjamin Cruz</p>
                  <button onClick={() => router.push("/stories")}>
                    <span>READ STORY</span>
                    <img src={"/assets/shared/desktop/arrow.svg"} alt="arrow" />
                  </button>
                </div>
              </motion.li>{" "}
            </ul>
            <ul>
              <motion.li
                className="borodin"
                initial={{ x: -50, opacity: 0 }}
                animate={midInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                {" "}
                <div>
                  <h4>18 Days Voyage</h4>
                  <p>by Alexei Borodin</p>
                  <button onClick={() => router.push("/stories")}>
                    <span>READ STORY</span>
                    <img src={"/assets/shared/desktop/arrow.svg"} alt="arrow" />
                  </button>
                </div>
              </motion.li>
              <motion.li
                className="brooke"
                initial={{ x: 50, opacity: 0 }}
                animate={midInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div>
                  <h4>Architecturals</h4>
                  <p>by Samantha Brooke</p>
                  <button onClick={() => router.push("/stories")}>
                    <span>READ STORY</span>
                    <img src={"/assets/shared/desktop/arrow.svg"} alt="arrow" />
                  </button>
                </div>
              </motion.li>
            </ul>
          </ul>
        </motion.section>
        <motion.section
          className="bottom"
          ref={bottomRef}
          initial={{ opacity: 0, y: 50 }}
          animate={bottomInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <ul>
            {[
              {
                src: "/assets/features/desktop/responsive.svg",
                title: "100% Responsive",
                text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
              },
              {
                src: "/assets/features/desktop/no-limit.svg",
                title: "No Photo Upload Limit",
                text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
              },
              {
                src: "/assets/features/desktop/embed.svg",
                title: "Available to Embed",
                text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={bottomInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * i }}
              >
                <img src={item.src} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
