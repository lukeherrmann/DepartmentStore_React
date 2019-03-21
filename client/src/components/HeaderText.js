import styled from 'styled-components';


const fontSize = (size) => {
  switch (size) {
    case 'large':
      return '40px';
    case 'small':
      return '25px';
    default:
      return '20px';
  }
};


export default styled.h1`
  text-align: center;
  font-size: ${props => fontSize(props.fSize)} !important;
`