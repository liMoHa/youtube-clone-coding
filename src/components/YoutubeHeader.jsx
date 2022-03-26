import React from 'react';
import styles from '../style/youtubeHeader.module.css';

const YoutubeHeader = () => {
    return (
        <header className={styles.ytheader}>
            <div className={styles.ytheader__logo}>
                <img src="./images/logo.png" alt="youtube logo" className={styles.ytheader__img} />
                <span className={styles.ytheader__title}>YouTube</span>
            </div>
            <form className={styles.ytheader__search}>
                <input type="text" placeholder='Search..' className={styles.ytheader__input}/>
                <button className={styles.ytheader__button}><img src="./images/search.png" alt="search icon" /></button>
            </form>
        </header>
    );
};

export default YoutubeHeader;