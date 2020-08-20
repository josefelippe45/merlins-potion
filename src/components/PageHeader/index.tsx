import React, { useState } from 'react';
import styled from 'styled-components';
//import do css
import './styles.css';
//import dos assets
import logoImg from '../../assets/images/potions-logo.png';
import iconCart from '../../assets/images/icons/cart-icon.png';
import drawerIcon from '../../assets/images/icons/drawer.svg';
import closeIcon from '../../assets/images/icons/close.svg';
//sidebar estilizado.
const Sidebar = styled.div`
    height: 100vh;
    width: ${props => props.isOpen ? "100%" : "0"};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color:#4f0e6d ;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 10px;
    }`
const PageHeader = () => {

    const [isOpenState, setIsOpenState] = useState(false);
    return (
        <header className="page-header">
            <div className="top-container">
                {/* <p><strong className="strong">Merlin's</strong> Potions</p>
                    <p>---fine potions since 1026---</p> */}
                <div className="drawer">
                    <img className="open-drawer" src={drawerIcon} alt="Icone de Navegação" onClick={() => { setIsOpenState(!isOpenState) }} />
                    <Sidebar isOpen={isOpenState}>
                        <div className="header-nav">
                            <form action="/" className="search">
                                <img className="close-image"
                                    src={closeIcon} alt="Fechar drawer"
                                    onClick={() => { setIsOpenState(!isOpenState) }}
                                />
                                <input type="text" className="search-input" placeholder="Search our stock" />
                            </form>
                            <div className="group-items">
                                <p>Potions</p>
                                <hr></hr>
                                <p>Ingredients</p>
                                <hr></hr>
                                <p>Books</p>
                                <hr></hr>
                                <p>Supplies</p>
                                <hr></hr>
                                <p>Charms</p>
                                <hr></hr>
                                <p>Clearance! </p>
                                <hr></hr>
                            </div>
                            <div className="nav-footer-text">
                                <span>Sign In <span>or</span> Sign out</span>
                            </div>
                            <div className="nav-footer"></div>
                        </div>
                    </Sidebar>

                </div>
                <img src={logoImg} alt="Logo" />
                <div className="cart-icon">
                    <img src={iconCart} alt="Icone Caldeirão" />
                    <span>Bag <strong>1</strong></span>
                </div>


            </div>
            <div className="header-content">
                <span>
                    Free shipping on orders over $50
                </span>

            </div>
        </header>
    )
}

export default PageHeader;