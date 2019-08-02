import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './ScrollToTop.css';

export default function ScrollToTop({ visibleAt = 300, right = '30px', bottom = '40px', color }) {
  const [visibleOffset] = useState(visibleAt);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.smoothScroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothScroll);
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
      }
    };
    window.addEventListener('scroll', catchScroll);
    return () => window.removeEventListener('scroll', catchScroll);
  });

  const catchScroll = () => {
    setVisible(window.pageYOffset > visibleOffset);
  };

  const backToTop = () => {
    window.smoothScroll();
  };

  const position = {
    right: right,
    bottom: bottom,
  };

  const newColor = {
    backgroundColor: color,
  };

  return (
    <>
      <CSSTransition
        in={visible}
        timeout={300}
        classNames="btn-back-to-top"
        unmountOnExit
      >
        <div
          className="btn-back-to-top"
          id="backToTop"
          style={position}
          onClick={backToTop}
        >
          <div className="default" style={newColor}>
            <span>
              <i className="fa fa-chevron-up" aria-hidden="true" />
            </span>
          </div>
        </div>
      </CSSTransition>
    </>
  )
}