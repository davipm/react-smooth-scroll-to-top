import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

export default function ScrollToTop({ visibleAt, right, bottom }) {
  const [visibleOffset] = useState(visibleAt || 300);
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

    return () => {
      window.removeEventListener('scroll', catchScroll);
    }
  });

  let catchScroll = () => {
    setVisible(window.pageYOffset > parseInt(visibleOffset));
  };

  const backToTop = () => {
    window.smoothScroll();
  };

  const newStyle = {
    right: right,
    bottom: bottom
  };

  return (
    <div
      className={`btn-back-to-top ${visible ? 'show-btn': ''}`}
      id="backToTop"
      style={newStyle}
      onClick={backToTop}
    >
      <div className="default">
        <span>
          <i className="fa fa-chevron-up" aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}