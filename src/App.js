import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import { url } from './endpoints';

function App() {
// useEffect makes the call twice. Need to fix
  useEffect(() => {
    axios.get(url)
    .then((response) => {
      console.log(response.data);
    })
  }, [])

  return (
    <div>
      <h1>
        My React app
      </h1>
      <p>Communicating with the ASP.NET Core</p>
    </div>
  );
}

export default App;
