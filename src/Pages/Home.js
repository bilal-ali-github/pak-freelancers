import NavbarHome from '../components/NavbarHome'
import MainHome from '../components/MainHome'
import Footer from '../components/Footer'
import React from 'react'

const Home = () => {
    return (
        <React.Fragment>
            <NavbarHome />
            <MainHome />
            <Footer />
        </React.Fragment>
    )
}
 
export default Home