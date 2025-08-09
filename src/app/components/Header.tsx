"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
  const [width, setWidth] = useState(0);
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const navigate = router.push;
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWidth(currentWidth);

      if (currentWidth >= 700 && menu) {
        setMenu(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header>
      <h1 onClick={() => navigate("/")}>
        <img src={"/assets/shared/desktop/logo.svg"} alt="logo" />
      </h1>
      {width < 700 ? (
        <div>
          <img
            src="/assets/shared/mobile/menu.svg"
            alt="menu"
            onClick={() => setMenu(true)}
          />
          <AnimatePresence>
            {menu && (
              <>
                <motion.div
                  className="overlay"
                  onClick={() => setMenu(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="mobileNav"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div>
                    <h1 onClick={() => navigate("/")}>
                      <img src={"/assets/shared/desktop/logo.svg"} alt="logo" />
                    </h1>{" "}
                    <img
                      src="/assets/shared/mobile/close.svg"
                      alt="menu"
                      onClick={() => setMenu(false)}
                    />
                  </div>
                  <nav>
                    <ul>
                      <li>
                        <button
                          onClick={() => navigate("/stories")}
                          aria-label="STORY123"
                        >
                          STORIES
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => navigate("/features")}
                          aria-label="features2"
                        >
                          FEATURES
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => navigate("/pricing")}
                          aria-label="pricing32"
                        >
                          PRICING
                        </button>
                      </li>
                    </ul>
                  </nav>
                  <button
                    onClick={() => navigate("/invitation")}
                    aria-label="invitationBtn1"
                  >
                    GET AN INVITE
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <>
          <nav>
            <ul>
              <li className="storiesBtn" onClick={() => navigate("/stories")}>
                STORIES
              </li>
              <li className="featuresBtn" onClick={() => navigate("/features")}>
                FEATURES
              </li>
              <li className="pricingBtn" onClick={() => navigate("/pricing")}>
                PRICING
              </li>
            </ul>
          </nav>
          <button
            className="invitationBtn"
            onClick={() => navigate("/invitation")}
            aria-label="invitationBtn"
          >
            GET AN INVITE
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
