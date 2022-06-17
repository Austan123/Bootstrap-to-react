import React from "react";
import propTypes from "prop-types";   
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props){
  return (

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="primary"src={props.image} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
             {props.text}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }
    

export default Cards;

Cards.propTypes = {
  image: propTypes.string, title: propTypes.string, text: propTypes.string
}