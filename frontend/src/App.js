import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
      axios.get('http://localhost:8000/api/get-data/')
        .then(response => {
          setMessage(response.data.message);
        })
        .catch(error => {
          console.error('Error fetching the data!', error);
        });
    }, []);
  
    return (
      <div className="App">
        <h1>Message from Django:</h1>
        <p>{message}</p>
      </div>
    );
  }
  
  export default App;