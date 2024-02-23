import { useCart } from "../Providers/CartContext";
import Header from '../Components/Header';
import styles from '../Style/style.module.css';

export default function Cart() {
    const { cart, removeFromCart, clearCart, setCart } = useCart();
    const incrementQuantity = (item) => {
        setCart(cart.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            } else {
                return cartItem;
            }
        }));
    }

    const decrementQuantity = (item) => {
        setCart(cart.map((cartItem) => {
            if (cartItem.id === item.id && cartItem.quantity > 1) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            } else {
                return cartItem;
            }
        }));
    }

    const calculateTotal = () => {
        return cart?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;
    }

    const totalItems = cart?.reduce((acc, item) => acc + item.quantity, 0) || 0;

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.header}>
                <h1>Mon Panier</h1>
                <p>Nombre d'articles {totalItems}</p>
                <button onClick={clearCart}>Vider le Panier</button>
            </div>
            {cart?.map((item) => (
                <div key={item.id} className={styles.CartItem}>
                    <div className={styles.ImgDet}>
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>Quantité : {item.quantity}</p>
                            <p>Prix : {item.price} €</p>
                            <p>Prix total : {item.price * item.quantity} €</p>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button onClick={() => incrementQuantity(item)}>+</button>
                        <button onClick={() => decrementQuantity(item)}>-</button>
                        <button onClick={() => removeFromCart(item.id)}>Suprimer</button>

                    </div>
                </div>
            ))}
            <div className={styles.total}>
                Total: {calculateTotal()} €
            </div>
        </div>
    );
}