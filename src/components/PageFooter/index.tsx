import React from 'react';
//import dos assets
import facebook from '../../assets/images/icons/facebook.svg'
import twitter from '../../assets/images/icons/twitter.svg'
import tumblr from '../../assets/images/icons/tumblr.svg'
import pinterest from '../../assets/images/icons/pinterest.svg'
import google from '../../assets/images/icons/google.svg'
import './styles.css'
const PageFooter = () => {
    return (
        <div id="main-content" className="content-footer">
            <div className="submit-form">
                <div className="text">
                    <p>Sing up for our Newsletter</p>
                    <p>Sing up for our newsletter & get exclusives discounts</p>
                </div>

                <form action="/" className="sign-up">
                    <input type="text" className="submit" placeholder="Enter your email" />
                    <button className="submit-button">
                        SUBMIT
                    </button>
                </form>

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
    );
}
export default PageFooter;