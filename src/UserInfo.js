import { GoogleLogout } from '@leecheuk/react-google-login'
import { useContext } from 'react'
import { ProfileContext } from './Context/Profilecontext'
import './App.css'

function UserInfo() {
    const { profile, clientID, logOut } = useContext(ProfileContext)
    return (
        <div className='userinfo'>
            <img src={profile.imageUrl} alt='User' />
            <h2>{profile.name}</h2>
            <p>Your Email: {profile.email}</p>
            <GoogleLogout clientId={clientID} buttonText="Log out" onLogoutSuccess={logOut} />
        </div>
    )
}

export default UserInfo