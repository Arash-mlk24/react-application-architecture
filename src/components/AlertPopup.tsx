import BasePopupProps from '../model/view/BasePopupProps'
import Popup from './Popup'

interface AlertPopupProps extends BasePopupProps {
  message: string;
}

const AlertPopup = (props: AlertPopupProps) => {

  return (
    <Popup
      open={props.open}
      onClose={props.onClose}
    >
      <p>
        {props.message}
      </p>
    </Popup>
  )

}

export default AlertPopup