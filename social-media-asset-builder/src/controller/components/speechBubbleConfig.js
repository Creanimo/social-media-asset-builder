import SpeechBubble from "../../view/components/speechBubble";

const speechBubbleConfig = {
    component: SpeechBubble,
    properties: {
      text: {
        type: 'text',
        label: 'Text',
        defaultValue: '',
      },
      width: {
        type: 'number',
        label: 'Width',
        defaultValue: 200,
      },
      align: {
        type: 'select',
        label: 'Alignment',
        options: ['left', 'center', 'right'],
        defaultValue: 'left',
      },
      arrowPosition: {
        type: 'select',
        label: 'Arrow Position',
        options: ['left', 'right'],
        defaultValue: 'left',
      },
    },
  };
  
  export default speechBubbleConfig;