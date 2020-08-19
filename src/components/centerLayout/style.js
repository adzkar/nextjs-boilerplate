import styled, { css } from 'styled-components';

export const CenterLayoutStyle = styled.div`
  max-width: ${(props) => (props.width === undefined ? '600px' : props.width)};
  margin: auto;
  position: relative;
  background-color: white;

  ${(props) =>
    props.fullHeight &&
    css`
      min-height: 100vh;
    `}
`;
