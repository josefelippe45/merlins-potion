import React from 'react';
import { POTIONS } from '../../data/dummy-data';
import './styles.css';

const PotionItem = () => {
    return (
        <div className="content">
            <h1>Potions</h1>
            <div className="potion-container">

                {
                    POTIONS.map((data, key) => {
                        return (
                            <div className="single-potion" key={key}>
                                <img src={data.image} alt={data.name} />
                                <p>{data.name} - <span>${data.price}</span></p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default PotionItem;