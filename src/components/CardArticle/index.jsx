import React from 'react';
import "./index.css"
import { Button, Card } from 'react-bootstrap';
import Img from '../../assets/Img/test.png';

const CardArticle = () => {
    return (
        <>
            <div className="container">
                <Card className="card">
                    <Card.Img variant="top" src={Img} alt="" className="card_img" />
                    <Card.Body>
                        <Card.Title>Trottinet</Card.Title>
                        <Card.Text>Prix : 500€</Card.Text>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default CardArticle;

