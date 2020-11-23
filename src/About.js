import React from 'react'
import Card from 'react-bootstrap/Card';

const About = () => {
  const cardInfo = [
    {image: '', title: 'Kevin Tran', text: 'Some text.'},
    {image: '', title: 'Khalil Tran', text: 'Some Text.'}
  ]

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div>
      {cardInfo.map(renderCard)}
    </div>
  );
};

export default About;