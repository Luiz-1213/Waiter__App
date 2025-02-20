import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.8);
  backdrop-filter: blur(4.5px);
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody =styled.div`
  background-color: #fff;
  width: 480px;
  padding: 32px;
  border-radius: 8px;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
      font-size: 24px;
    }

    button{
      line-height: 0;
      border: none;
      background-color: transparent;
    }
  }

  
`;