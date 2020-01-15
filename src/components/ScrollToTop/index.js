import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import { BackToTop, Default, ArrowTop } from "./style";

function ScrollToTop({ children, color, right, bottom, visibleAt }) {
  const [visibleOffset] = useState(visibleAt || 300);
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
  const catchScroll = () => setVisible(window.pageYOffset > visibleOffset);

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

ScrollToTop.prototype = {
  visibleAt: PropTypes.number.isRequired,
  right: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default ScrollToTop;
