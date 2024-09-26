import React, { useEffect, useRef } from 'react';
import '../Styles/AnimatedText.css';

function AnimatedText({ text }) {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      // Split text by spaces but preserve spaces in the array
      const words = text.split(' ').map(word => `<span>${word}</span>`).join(' ');

      textRef.current.innerHTML = words;
      const spans = textRef.current.querySelectorAll('span');

      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add('visible');
        }, index * 300); // Adjust the delay as needed
      });
    }
  }, [text]);

  return (
    <div ref={textRef} className="animated-text">
      {/* The text will be injected here */}
    </div>
  );
}

export default AnimatedText;
