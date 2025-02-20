import { ModalBody, Overlay } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';

interface OrderModalProps{
  visible: boolean
  // handleCloseModal: function ():void; 
}


function OrderModal({visible}:OrderModalProps) {
  if(!visible){
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa 2</strong>
          <button type="button">
            <img src={closeIcon} alt="Icone de fechar modal" />
          </button>
        </header>
      </ModalBody>
    </Overlay>
  );
}

export default OrderModal;