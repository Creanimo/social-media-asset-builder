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
      paddingTop: {
        type: 'number',
        label: 'Padding Top',
        defaultValue: 20,
      },
      paddingRight: {
        type: 'number',
        label: 'Padding Right',
        defaultValue: 20,
      },
      paddingBottom: {
        type: 'number',
        label: 'Padding Bottom',
        defaultValue: 20,
      },
      paddingLeft: {
        type: 'number',
        label: 'Padding Left',
        defaultValue: 20,
      },
      radius: {
        type: 'number',
        label: 'Radius',
        defaultValue: 20,
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
      height: {
        type: 'dynamic',
        defaultValue: 10,
      }
    },
  };
  
  export default speechBubbleConfig;