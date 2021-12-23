import NavbarProfile from '../components/NavbarProfile'
import ProfileMain from '../components/ProfileMain'
import ProfileDescription from '../components/ProfileDescription'
import Footer from '../components/Footer'
import React from 'react'

const Profile = () => {
    return (
        <React.Fragment>
            <NavbarProfile />
            <ProfileMain />
            <ProfileDescription />
            <Footer />
        </React.Fragment>
    )
}

export default Profile