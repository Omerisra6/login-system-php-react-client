import './App.css';
import LoginOrSignup from './components/LoginOrSignup';
import Main from './components/Main';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [ session, setSession ]   = useLocalStorage( 'session', '')

  return (
    <div className="App">
        { ! session ? 
          <LoginOrSignup  setSession={setSession}/>:
          <Main session={session} setSession={setSession}/>
        }
    </div>
  );
}

export default App;
