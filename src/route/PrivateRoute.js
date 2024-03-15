import {Navigate} from 'react-router-dom';
import ProductDetail from '../page/ProductDetail';

const PrivateRoute = ({authenticate, productList}) => {
    return authenticate === true ? <ProductDetail productList={productList} /> : <Navigate to='/login' />;
};
export default PrivateRoute;
