import { CenterLayoutStyle } from './style';

function CenterLayout(props) {
  return (
    <CenterLayoutStyle
      width={props.width}
      className={props.className + ' component_center_layout'}
      {...props}
    >
      {props.children}
    </CenterLayoutStyle>
  );
}

export default CenterLayout;
