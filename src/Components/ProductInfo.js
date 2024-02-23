import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../Services/API";
import { useCart } from "../Providers/CartContext";
import styles from '../Style/style.module.css';

export default function Product() {
    let { id } = useParams();
    let { data, isFetching } = useGetProductsQuery();
    const { addToCart } = useCart(); 

    let product = data?.find((product) => product.id === id);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity: 1 });
    };

    if (isFetching) return <h1>Loading...</h1>;
    if (!product) return <h1>Produit non trouvé</h1>;

    return (
        <div className={styles.productContainer}>
            <img 
                src={product.image} 
                alt={product.title} 
                className={styles.productImage} 
            />
            <div className={styles.productDetails}>
                <h1 className={styles.productTitle}>{product.title}</h1>
                {product.unit_of_measurement && (
                    <>
                        <p>Unité de mesure : {product.unit_of_measurement}</p>
                        <p>Mesure : {product.measure} {product.unit_of_measurement}</p>
                        <p>Prix par {product.unit_of_measurement} : {product.price_per_measure} €</p>
                    </>
                )}

            </div>
            <div className={styles.productLeft}>
                <p className={styles.productPrice}>Prix : {product.price} €</p>
                <button 
                    onClick={handleAddToCart}
                    className={styles.addToCartButton}
                >
                    Ajouter au panier
                </button>
            </div>
        </div>
    );
}