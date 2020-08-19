import { ComponentWrapper } from './style';

function Index(props) {
  return (
    <ComponentWrapper className={props.className}>
      {props.children}
    </ComponentWrapper>
  );
}

export default Index;
