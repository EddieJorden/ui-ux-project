/* eslint-disable react/react-in-jsx-scope */
function RadioButtons() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <input type="radio" value="all" name="all" onChange={handleChange} />
      <input type="radio" value="2015" onChange={handleChange} />
      <input type="radio" value="2016" onChange={handleChange} />
    </div>
  );
}

export default RadioButtons;
