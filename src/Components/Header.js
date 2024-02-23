import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../Providers/CartContext"; 
import styles from '../Style/style.module.css';

export default function Header() {
    const { cart } = useCart(); 
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className={styles.headerContainer}>
            <Link to="/" className={styles.headerLink}>Nos Produits</Link>
            <Link to="/cart" className={styles.headerLink}>
                Mon Panier
                <span className={styles.cartCount}>{totalQuantity}</span>
            </Link>
        </div>
    );
}
