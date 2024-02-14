import styles from './Card.module.css';

import { Link } from "react-router-dom";

function Card({ id, name, price, included, notIncluded }) {

    const renderPrice = () => {
        if (price === 0) {
            return (
                <h2 className={styles.txtSemiBold32Green}>Gratis</h2>
            )
        } else {
            return (
                <div className={styles.containerPrice}>
                    <h2 className={styles.txtSemiBold32Green}>${price}/</h2>
                    <p className={styles.txtSemiBold16Green}>Mes</p>
                </div>

            )
        };
    };

    const renderIncluded = () => {
        return included.map((item, index) => (
            <div key={index} className={styles.containerListItem}>
                <svg
                    width="30"
                    height="30"
                    className={styles.icnCheck}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    style={{ verticalAlign: 'middle', width: '30px', height: '30px' }} // Add this style
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className={styles.txtRegular16} key={index}>{item}</p>
            </div>
        ));
    };
    
    const renderNotIncluded = () => {
        return notIncluded.map((item, index) => (
            <div key={index} className={styles.containerListItem} id={styles.list}>
                <svg
                    width="30"
                    height="30"
                    className={styles.icnCross}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    style={{ verticalAlign: 'middle', width: '30px', height: '30px' }} // Add this style
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className={styles.txtRegular16} key={index}>{item}</p>
            </div>
        ));
    };
    
    

    return (
        <div className={styles.card}>
            <h1 className={styles.txtSemiBold32Black}>{name}</h1>
            {renderPrice()}
            <div className={styles.containerList}>
                {renderIncluded()}
                {notIncluded !== null && renderNotIncluded()}
            </div>
            <Link to="/cart">
                <button className={styles.btn}>Empezar</button>
            </Link>
        </div>
    )
};

export default Card; 
