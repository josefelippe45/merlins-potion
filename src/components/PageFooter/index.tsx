import React from 'react';
import styled from 'styled-components';
//import dos assets
import facebook from '../../assets/images/icons/facebook.svg'
import twitter from '../../assets/images/icons/twitter.svg'
import tumblr from '../../assets/images/icons/tumblr.svg'
import pinterest from '../../assets/images/icons/pinterest.svg'
import google from '../../assets/images/icons/google.svg'
import './styles.css'
const Button = styled.button`
  background: #e44f22;
  color: white;
  border-radius: 3px;
  border: 2px solid #e44f22;
  margin: 0 1em;
  padding: 0.25em 1em;
  `

const PageFooter = () => {
   
    return (
        <div id="main-content" className="content-footer">
            <div className="submit-form">
                <div className="text">
                    <p className="sign-up-text">Sing up for our Newsletter</p>
                    <p>Sing up for our newsletter & get exclusives discounts</p>
                </div>

                <form action="/" className="sign-up">
                    <input type="text" className="submit" placeholder="Enter your email" />
                    <Button>
                        SUBMIT
                    </Button>
                </form>

            </div>
            <div className="left-cmp">
                <div className="alerts">
                    <div className="line-1">
                        <span>COMPANY</span>
                        <span>CONTACT US</span>
                        <span>SHIPPING</span>
                    </div>

                    <div className="line-2">
                        <span>RETURNS</span>
                        <span>CAREERS</span>
                    </div>
                </div>

                <div className="social-media">
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={tumblr} alt="tumblr" />
                    <img src={pinterest} alt="pinterest" />
                    <img src={google} alt="google" />
                </div>
                <div className="copyright">
                    <span>© 2015 Merlin's Potions. All Right Reserved</span>
                </div>
            </div>
        </div>

    );
}
export default PageFooter;