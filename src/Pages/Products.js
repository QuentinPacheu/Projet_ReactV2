import React from 'react';
import Header from "../Components/Header";
import ProductsList from '../Components/ProductsList'; 
import styles from '../Style/style.module.css';

export default function ProductsPage() {
    return (
        <div>
            <Header />
            <div className={styles.productPageContainer}>
                <h1 className={styles.pageTitle}>Tous nos Produits</h1>
                <ProductsList />
            </div>
        </div>
    );
}
