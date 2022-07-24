import ReactJsPopup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BasePopupProps from '../model/view/BasePopupProps';

interface PopupProps extends BasePopupProps {
  children?: React.ReactElement;
}

const Popup = (props: PopupProps) => {
  return (
    <ReactJsPopup
      contentStyle={{ borderRadius: 20 }}
      open={props.open}
      onClose={props.onClose}
    >
      {props.children}
    </ReactJsPopup>
  )
}

export default Popup