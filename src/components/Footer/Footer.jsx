import './Footer.scss';
import React from 'react';
import logo from '../../assets/logo-no-background.svg'
import {Form} from "../Form/Form";
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";

export const Footer = (props) => {
    const classes = "footer " + props.className;
    return (
        <footer id='footer' className={classes}>
            <div className='footer__content wrapper'>
                <div className='left-content'>
                    <img className='logo' src={logo} alt=''/>
                    <p className='description'>
                        Our team is happy to answer your questions. Fill out the form and we’ll be in touch as soon as
                        possible.
                    </p>
                </div>
                <Form/>
            </div>
            <div className='footer__copyright wrapper'>
                <div className='copy-info'>© 2023 Tasty journey. All Rights Reserved.</div>
                <p className='creator'>made by Anastasiia Vatrala</p>
                <div className='social-media'>
                    <a href='https://www.facebook.com/profile.php?id=100011298859408' target='_blank' rel="noreferrer">
                        <AiFillFacebook className='social-media__icon' color="#666" fontSize='35px'/>
                    </a>
                    <a href='https://www.instagram.com/a.vatrala/' target='_blank' rel="noreferrer">
                        <AiFillInstagram className='social-media__icon' color="#666" fontSize='35px'/>
                    </a>
                    <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                        <AiFillTwitterCircle className='social-media__icon' color="#666" fontSize='35px'/>
                    </a>
                    <a href='https://www.linkedin.com/in/anastasiya-vatrala-990ab4248/' target='_blank'
                       rel="noreferrer">
                        <AiFillLinkedin className='social-media__icon' color="#666" fontSize='35px'/>
                    </a>
                </div>
            </div>
        </footer>

    );
};