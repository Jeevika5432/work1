import React, { Component } from 'react';
import styles from './Main.module.css';
import Card from './card';

import card1 from '../images/sea.jpg';
import card2 from '../images/vegetable.jpg';



class Main extends Component {
    render() {
        return (
                <div className={styles.cardsContainers}>
                <h1 className={styles.menu}>MODEL TYPE</h1>
                <div className={styles.cards}>
                    <Card address={card1} food='PREMIUM MODEL '></Card>
                    <Card address={card2} food='REGULAR MODEL '></Card>
                    
                </div>
                </div>
        );
    }
}

export default Main;