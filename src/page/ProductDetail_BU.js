import {useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

const ProductDetail = ({productList}) => {
    let params = useParams();
    const [detailData, setDetailData] = useState();
    console.log(params.id, productList[0].id);
    return (
        <div>
            {productList.map((item, index) => {
                if (Number(item.id) === Number(params.id)) {
                    return (
                        <Container key={index}>
                            <Row>
                                <Col>
                                    <img src={item.img} alt={item.title} />
                                </Col>
                                <Col>
                                    <h3>{item.title}</h3>
                                    <h4>{item.price}</h4>
                                    <select>
                                        {item.size.map((size) => (
                                            <option value={size}>{size}</option>
                                        ))}
                                    </select>
                                </Col>
                            </Row>
                        </Container>
                    );
                } else {
                    return;
                }
            })}
        </div>
    );
};
export default ProductDetail;
