/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const FilterButtonDiv = styled.div`
  margin: 10px

`;

function FilterButton(props) {
  const { value, handleClick } = props;
  return (
    <FilterButtonDiv>
      <input
        type="button"
        value={value}
        name={value}
        onClick={handleClick}
        style={{

        }}
      />
    </FilterButtonDiv>
  );
}

export default FilterButton;
