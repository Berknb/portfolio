import React from 'react';
import Classes from '../../styles/home.module.css';
import Image from 'next/image';
import headerImage from  '../../images/headerImage.jpg';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function index() {
    return (
        <>
        <div className={Classes.homeContainer} id='bio'>
        <section className={Classes.welcome}>
          <div className={Classes.first}>
                  <a href='https://github.com/Berknb' target="_blank" rel='noreferrer'><FaGithub/></a>
                  <a href='https://www.linkedin.com/in/berkd%C3%BCndar/' target="_blank" rel='noreferrer'><FaLinkedin/></a>
                  </div>
          <div className={Classes.second}>
              <Image src={headerImage} alt='headerImage' width="350%" height="400%"/>
              <header>
                  <h1>Berk DÜNDAR</h1>
                  <h3>Junior front-end developer</h3>
                  </header>
              </div>
          <div className={Classes.third}>
          <a href='https://twitter.com/berkndundar' target="_blank" rel='noreferrer'><FaTwitter/></a>
                  <a href='https://www.instagram.com/berkdundar0/' target="_blank" rel='noreferrer'><FaInstagram/></a>
              </div> 
          </section> 
        </div>
        </>
    )
}