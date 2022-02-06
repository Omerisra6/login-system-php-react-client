import { useEffect } from 'react';
import './App.css';
import LoginOrSignup from './components/LoginOrSignup';
import Main from './components/Main';
import useLocalStorage from './hooks/useLocalStorage';
import { logOffRequest } from './userRequests';

function App() {

  const [ username, setUsername ] = useLocalStorage( 'username', '')

  

  return (
    <div className="App">
        { ! username ? 
          <LoginOrSignup setUsername={setUsername}/>:
          <Main username={username} setUsername={setUsername}/>
        }
    </div>
  );
}

export default App;
