import React from 'react';
import { useGetProductsQuery } from "../Services/API";
import { useNavigate } from 'react-router-dom';
import styles from '../Style/style.module.css';
import { useCart } from '../Providers/CartContext';

function ProductsList() {
    const navigate = useNavigate(); 
    const { cart, addToCart, removeFromCart } = useCart();

    let { data, isFetching } = useGetProductsQuery();

    if (isFetching) return <p>Loading...</p>;

    const navigateToProduct = (id) => {
        navigate(`/products/${id}`); 
    };

    return (
        <div className={styles.cardContainer}>
            {data.map((product) => (
                <div key={product.id} className={styles.card}>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <button onClick={() => navigateToProduct(product.id)}>Voir le produit</button>
                    <div key={product.id} className={styles.BCard}>
                    <span>{product.price}€</span>
                    <button onClick={() => addToCart({ ...product, quantity: 1 })}>Ajouter au panier</button>
                </div>
                </div>
            ))}
        </div>
    );
}

export default ProductsList;