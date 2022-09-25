import { useEffect, useContext } from 'react';
import { GoogleLogin } from '@leecheuk/react-google-login'
import { gapi } from 'gapi-script'
import { ProfileContext } from './Context/Profilecontext';

export default function SignIn() {
    const { clientID, onSuccess } = useContext(ProfileContext)

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientID,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    }, [])

    const onFailure = (err) => {
        console.log('failed:', err);
    }

    return (
        <div className='signin'>
            <h2 className='mainTitle'>Blog</h2>
            <h5>Sign In with Google</h5>
            <GoogleLogin
                clientId={clientID}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}
