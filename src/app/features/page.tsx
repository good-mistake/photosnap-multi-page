"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const ulRef = useRef(null);
  const inviteRef = useRef(null);
  const inviteInView = useInView(inviteRef, { once: true });
  const isInView = useInView(ulRef, { once: true, margin: "-50px" });
  const router = useRouter();

  return (
    <motion.div
      className="featuresContainer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Header />
      <main>
        <section className="top">
          <div className="desc">
            <div className="borders">
              <div>
                <h2>FEATURES</h2>
                <p>
                  We make sure all of our features are designed to be loved by
                  every aspiring and even professional photograpers who wanted
                  to share their stories.
                </p>
              </div>
            </div>
          </div>
          <div className="img"></div>
        </section>
        <section className="mid">
          <ul ref={ulRef}>
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
              {
                src: "/assets/features/desktop/custom-domain.svg",
                title: "Custom Domain",
                text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
              },
              {
                src: "/assets/features/desktop/boost-exposure.svg",
                title: "Boost Your Exposure",
                text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
              },
              {
                src: "/assets/features/desktop/drag-drop.svg",
                title: "Drag & Drop Image",
                text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
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
        </section>
        <section className="bot">
          <motion.div
            className="invite"
            ref={inviteRef}
            initial={{ opacity: 0, y: 50 }}
            animate={inviteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2>We’re in beta. Get your invite today!</h2>
            <button onClick={() => router.push("/stories")}>
              <span>GET AN INVITE</span>
              <img src={"/assets/shared/desktop/arrow.svg"} alt="arrow" />
            </button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Page;
