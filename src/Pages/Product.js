import Header from "../Components/Header";
import ProductInfo from '../Components/ProductInfo';
import Comments from '../Components/Comments';
import { useParams } from 'react-router-dom'; 


export default function Product() { 
    let { id } = useParams(); 
    return (
        <div>
            <Header />
            <ProductInfo/> 
            <Comments productId={id} />
        </div>
    );
}
