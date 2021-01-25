import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import { BackToTop, Default, ArrowTop } from "./style";

ScrollToTop.prototype = {
  visibleAt: PropTypes.number.isRequired,
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string
};

export default function ScrollToTop({
  children,
  color = "#98a6d4",
  right = 30,
  bottom = 40,
  visibleAt = 300
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.smoothScroll = () => {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothScroll);
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5));
      }
    };

    window.addEventListener("scroll", catchScroll);

    return () => window.removeEventListener("scroll", catchScroll);
  }, []);

  /**
   * Catch window scroll event
   * @return {void}
   */
  const catchScroll = () => setVisible(window.pageYOffset > visibleAt);

  /**
   * The function who make the magics
   * @return {void}
   */
  const backToTop = () => window.smoothScroll();

  return (
    <>
      <CSSTransition in={visible} timeout={200}>
        {state => (
          <BackToTop
            state={state}
            right={right}
            bottom={bottom}
            onClick={backToTop}
          >
            <Default bgColor={color}>
              {children ? (
                children
              ) : (
                <span>
                  <ArrowTop />
                </span>
              )}
            </Default>
          </BackToTop>
        )}
      </CSSTransition>
    </>
  );
}
