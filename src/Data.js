import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row} from "react-bootstrap";
class Data extends Component{
    render() {
       
    const usrData = this.props.usrData.map((movie, index) => {
        return(
            <div class = "box col-lg-4 mt-5">
            <Row sm={3} md={4} lg={3} className="g-4">
        <Col key={index} xs={6} md={4}> 
        <Card style={{ width: '18rem' , height : 'auto'    }}>
            <Card.Img variant="top" src={movie.avatar} />
            <Card.Body>
                <Card.Text>Id:{movie.id}</Card.Text>
                <Card.Title>{movie.first_name} {movie.last_name}</Card.Title>
                <Card.Text>{movie.email}</Card.Text>
                <Card.Text><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dicta eveniet, repellat nemo aliquid reprehenderit!</p></Card.Text>
            </Card.Body>
        </Card>
    </Col>
    </Row>
    </div>
        );
    });
     return (
        <div className="container">
            <div className="row" style={{'marginTop':'20px', }}>
                {usrData}
            </div>
        </div>
    );
}
}
export default Data