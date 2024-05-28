import React, { useState } from 'react';
import SpeechBubble from './view/components/speechBubble';
import ConfigSidebar from './view/components/configSidebar';
import speechBubbleConfig from './controller/components/speechBubbleConfig';

const App = () => {
  const [config, setConfig] = useState({
    text: speechBubbleConfig.properties.text.defaultValue,
    width: speechBubbleConfig.properties.width.defaultValue,
    align: speechBubbleConfig.properties.align.defaultValue,
    arrowPosition: speechBubbleConfig.properties.arrowPosition.defaultValue,
  });

  const handleConfigChange = (key, value) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      [key]: value,
    }));
  };

  return (
    <div className="app">
      <SpeechBubble {...config} />
      <ConfigSidebar config={speechBubbleConfig} onChange={handleConfigChange} />
    </div>
  );
};

export default App;
