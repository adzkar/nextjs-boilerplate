import { BackdropWrap } from './style';
import PropTypes from 'prop-types';

const Backdrop = (props) =>
  // props.show ? <BackdropWrap onClick={() => console.log('backdrop click')}></BackdropWrap> : null;
  props.show ? (
    <BackdropWrap onClick={props.clicked} zIndex={props.zIndex} />
  ) : null;

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};
export default Backdrop;
