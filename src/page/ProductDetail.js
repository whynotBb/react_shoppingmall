import {useState} from 'react';
import {Col, Container, Dropdown, Row} from 'react-bootstrap';
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
                                <Col>{/* <img src={item.img} alt={item.title} /> */}</Col>
                                <Col>
                                    <h3>{item.title}</h3>
                                    <h4>{item.price}</h4>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                                            사이즈 선택
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {item.size.map((size) => (
                                                <Dropdown.Item>{size}</Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
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
