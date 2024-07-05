import React, { useState } from 'react';
import SpeechBubble from './view/components/speechBubble';
import ConfigSidebar from './view/components/configSidebar';
import speechBubbleConfig from './controller/components/speechBubbleConfig';
import html2canvas from 'html2canvas';

const App = () => {
  const [config, setConfig] = useState({
    text: speechBubbleConfig.properties.text.defaultValue,
    width: speechBubbleConfig.properties.width.defaultValue,
    radius: speechBubbleConfig.properties.radius.defaultValue,
    paddingTop: speechBubbleConfig.properties.paddingTop.defaultValue,
    paddingRight: speechBubbleConfig.properties.paddingRight.defaultValue,
    paddingBottom: speechBubbleConfig.properties.paddingBottom.defaultValue,
    paddingLeft: speechBubbleConfig.properties.paddingLeft.defaultValue,
    align: speechBubbleConfig.properties.align.defaultValue,
    arrowPosition: speechBubbleConfig.properties.arrowPosition.defaultValue,
    id: 'sb1',
  });

  const handleConfigChange = (key, value) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      [key]: value,
    }));
  };

  const savePNG = () => {
    html2canvas(document.getElementById('sb1'), { backgroundColor: null }).then(function(canvas) {
      var link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'myDiv.png';
      link.click();
    });
  };

  return (
    <div className="app">
      <SpeechBubble {...config} />
      <ConfigSidebar config={speechBubbleConfig} onChange={handleConfigChange} />
      <button id="saveBtn" onClick={savePNG}>Save as PNG</button>
    </div>
  );
};

export default App;