import React, { useState } from 'react'

export const ProfileContext = React.createContext()

export const ProfileProvider = ({ children }) => {
    const clientID = '381722621381-qpup7iikfaqt4t10k4n620v1e0m9f9km.apps.googleusercontent.com'


    const [profile, setProfile] = useState()

    const onSuccess = (res) => {
        setProfile(res.profileObj);
    };

    const logOut = () => {
        setProfile(null)
    }

    return (
        <ProfileContext.Provider value={{ logOut, onSuccess, profile, clientID }}>
            {children}
        </ProfileContext.Provider>
    )
}