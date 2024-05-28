import React from 'react';

const SpeechBubble = ({ text, width, align, arrowPosition }) => {
  const bubbleStyle = {
    width: width,
    textAlign: align,
    // Add styles for the speech bubble and arrow based on arrowPosition
  };

  return (
    <div style={bubbleStyle} class="create-social__object__speech-bubble">
      <p>{text}</p>
    </div>
  );
};

export default SpeechBubble;