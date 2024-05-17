import logo from './logo.svg';
import './App.css';
import './Components/Post.css';
import Post from './Components/Post';
import { useEffect, useState } from 'react';

function App() {
  const [data, setdata] = useState([])
  const [hidedata,setHidedata]=useState(false)

const handleData=()=>
  {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((err) => console.log(err))
     setHidedata(!hidedata)
  }

  return (
    <div className="App">
      <button onClick={handleData}>{hidedata ? "Hide Data":"Get Data"}</button>
      {hidedata && data.map((el) => (<Post key={el.id} body={el.body} title={el.title} />))}
    </div>
  );
}

export default App;
