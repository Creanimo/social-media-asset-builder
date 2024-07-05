import React, { useRef, useEffect, useState } from 'react';

const SpeechBubble = ({ id, text, width, align, arrowPosition, radius, paddingTop, paddingRight, paddingBottom, paddingLeft}) => {
  const textRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setHeight(textRef.current.offsetHeight);
    }
  }, [text]);

  let bubbleStyle = {
    width: width,
    textAlign: align,
    paddingTop: paddingTop,
    paddingRight: paddingRight,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
    // Add styles for the speech bubble and arrow based on arrowPosition
  };

  let lineThickness = 3;
  let arrowLength = radius + 40;
  let widthMinusRadius = width - 2 * radius;
  let shortSideMinusRadius = height - 2 * radius;
  let longestStraightLine = arrowLength + paddingLeft + widthMinusRadius + paddingRight + radius

  if (arrowPosition === 'left') {
    bubbleStyle = {
      ...bubbleStyle,
      paddingLeft: paddingLeft + arrowLength,
    };
  }

  return (
    <div id={id} className="create-social__object__speech-bubble">
      <svg width="100%" height={height}>
        <path d={`M 0 ${lineThickness / 2} h${longestStraightLine} a${radius},${radius} 0 0 1 ${radius},${radius}
          v${shortSideMinusRadius} z`}
          fill="none" stroke="black" stroke-width={lineThickness} /> {/* Just an example */}
      </svg>
      <div
        ref={textRef}
        style={bubbleStyle}
        id={id}
        className="create-social__object__speech-bubble__text"
      >
        {text}
      </div>
    </div>
  );
};

export default SpeechBubble;