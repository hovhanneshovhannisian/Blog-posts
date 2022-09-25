import { useContext } from 'react';
import { ProfileContext } from './Context/Profilecontext';
import Profile from './Profile';
import SignIn from './SignIn';
import './App.css'

function App() {
  const { profile } = useContext(ProfileContext)

  return (
    <div className='App'>
      {profile ? <Profile /> : <SignIn />}
    </div >
  );
}

export default App;
