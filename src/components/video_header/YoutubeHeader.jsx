import React, {useRef} from 'react';
import styles from './youtubeHeader.module.css';

const YoutubeHeader = ({onSearch}) => {
    const inputRef = useRef();
    const onSubmit = (e) =>{
        e.preventDefault();
        onSearch(inputRef.current.value);
    }
    return (
        <header className={styles.ytheader}>
            <a href='/youtube-clone-coding/' className={styles.ytheader__logo}>
                <img src="./images/logo.png" alt="youtube logo" className={styles.ytheader__img} />
                <span className={styles.ytheader__title}>YouTube</span>
            </a>
            <form onSubmit={onSubmit} className={styles.ytheader__search}>
                <input ref={inputRef} type="text" placeholder='Search..' className={styles.ytheader__input}/>
                <button className={styles.ytheader__button}><img src="./images/search.png" alt="search icon" /></button>
            </form>
        </header>
    );
};

export default YoutubeHeader;