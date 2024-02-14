const ProductCard = ({ item }) => {
    return (
        <div>
            <img src={item?.img} />
            <div>{item?.choice === true ? "Conscious Choice" : ""}</div>
            <div>{item?.title}</div>
            <div>₩{(item?.price).toLocaleString()}</div>
            <div>{item?.new === true ? "new" : ""}</div>
        </div>
    );
};
export default ProductCard;
