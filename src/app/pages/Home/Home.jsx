import React from 'react'
import NavBar from './../../components/Navbar/NavBar';
import Header from './../../components/Header/Header';
import Featured from '../../components/featured/Featured';
import '../../assets/styles/Home.css'
import PropertyList from './../../components/propertyList/propertyList';
import FeaturesProperties from '../../components/featuresProperties/FeaturesProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <>
      <NavBar /> 
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturesProperties />
        <MailList />
        <Footer />
      </div>
    </>
  )
}

export default Home