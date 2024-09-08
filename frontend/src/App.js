import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Web3 from 'web3';

function App() {
    const [message, setMessage] = useState('');
    const [walletAddress, setWalletAddress] = useState('');

    useEffect(() => {
      axios.get('http://localhost:8000/api/get-data/')
        .then(response => {
          setMessage(response.data.message);
        })
        .catch(error => {
          console.error('Error fetching the data!', error);
        });
    }, []);
    
    const connectWallet = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          const accounts = await web3.eth.requestAccounts();
          setWalletAddress(accounts[0]);
          console.log('Connected wallet:', accounts[0]);
        } catch (error) {
          console.error('Error connecting to MetaMask', error);
        }
      } else {
        console.error('MetaMask is not installed');
      }
    };

    return (
    <div className="App">
      <h1>Message from Django:</h1>
      <p>{message}</p>
      <button id="connectWallet" onClick={connectWallet}>
        Connect Wallet
      </button>
      {walletAddress && (
        <p>Connected wallet address: {walletAddress}</p>
      )}
    </div>
  );

  }
  
  export default App;