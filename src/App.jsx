/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { useGetSampleDataQuery } from './sampleDataApi';

function App() {
  const { data, error, isLoading } = useGetSampleDataQuery('data');
  console.log(!isLoading ? { data, error, isLoading } : 'isLoading');
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>data returned from api below</div>
      <div>{data ? data[0].instructor.toString() : 'no data'}</div>
    </div>
  );
}

export default App;
