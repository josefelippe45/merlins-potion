import React, { useState } from 'react';
import styled from 'styled-components';
import { POTIONS } from '../../data/dummy-data';
import './styles.css';
const Button = styled.button`
  background: #e44f22;
  color: white;
  border-radius: 3px;
  border: 2px solid #e44f22;
  padding: 0.25em 1em;
  `
const PotionItem = () => {
    const [openModal, setOpenModal] = useState({
        id: 0,
        name: '',
        image: '',
        price: 0,
        effect: '',
        ingredients: [''],
    });
    return (
        <div className="content">
            <h1 className='title'>Potions</h1>
            <div className="potion-container">

                {
                    POTIONS.map((data, key) => {
                        return (
                            <div className="single-potion" key={key} data-toggle="modal" data-target="#myModal" onClick={() => { setOpenModal(data) }}>
                                <img src={data.image} alt={data.name} />
                                <p>{data.name} - <span>${data.price}</span></p>
                            </div>

                        )
                    })
                }
            </div>
            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">X</button>
                        </div>
                        <div className="modal-body">
                            <img src={openModal.image} alt={openModal.name} />
                            <div className="components">
                                <h1><strong>{openModal.name}</strong></h1>
                                <h1><strong>Use/Effects</strong></h1>
                                <p>{openModal.effect}</p>
                                <h1><strong>Ingredients</strong></h1>
                                <span className="ingredients" >{openModal.ingredients.map((key) => {
                                    return (<p key={key}>{key}</p>)
                                })}
                                </span>
                                <div className="price">
                                    <h1><strong>Price:</strong></h1>
                                    <span className="highlight">${openModal.price}</span>
                                </div>
                                <Button>ADD TO CART</Button>
                            </div>

                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PotionItem;