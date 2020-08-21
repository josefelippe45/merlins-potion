import React from 'react'
import PageHeader from '../../components/PageHeader/index';
import PotionItem from '../../components/PotionItem/index';
import PageFooter from '../../components/PageFooter/index';
import './styles.css';

const Landing = () => {
    return (
        <div id="landing">
            <div className="header">
                <PageHeader />
            </div>

            <div className="potion-list">
                <PotionItem />
            </div>
            <div className="footer">
                <PageFooter />
            </div>

        </div>
    );
}

export default Landing;