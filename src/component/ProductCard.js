import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const goDetail = (el) => {
        navigate(`/product/${el}`);
    };
    return (
        <Item onClick={() => goDetail(item?.id)}>
            <img src={item?.img} />
            <div>{item?.choice === true ? 'Conscious Choice' : ''}</div>
            <div>{item?.title}</div>
            <div>₩{(item?.price).toLocaleString()}</div>
            <div>{item?.new === true ? 'new' : ''}</div>
        </Item>
    );
};
const Item = styled.div`
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: all 0.3s;
    }
    &:hover {
        img {
            transform: scale(1.1);
        }
    }
`;
export default ProductCard;
