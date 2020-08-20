import React from 'react'
import PageHeader from '../../components/PageHeader/index';
import PotionItem from '../../components/PotionItem/index';
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

        </div>
    );
}

export default Landing;