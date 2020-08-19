import styled from 'styled-components';

export const BackdropWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: ${(props) => (props.zIndex ? props.zIndex : '50')};
`;
