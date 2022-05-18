/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const ButtonDiv = styled.div`
  margin: 10px
`;

function RadioButton(props) {
  const { value, handleChange } = props;
  return (
    <ButtonDiv>
      <div>
        {value}
      </div>
      <input type="radio" value={value} name={value} onChange={handleChange} />
    </ButtonDiv>
  );
}

export default RadioButton;
