import React from 'react'
import './components/Box.css';
import Card from 'react-bootstrap/Card';

const About = () => {
  const cardInfo = [
    {
      image: 'https://vignette.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest?cb=20160125182202', 
      title: 'Kevin Tran', 
      text: `Uchiha Itachi (うちはイタチ)`
    },
    {
      image: 'https://vignette.wikia.nocookie.net/naruto/images/1/13/Sasuke_Part_2.png/revision/latest/scale-to-width-down/340?cb=20170716092003', 
      title: 'Khalil Tran', 
      text: 'Uchiha Sasuke (うちはサスケ)'
    } 
  ]

  const renderCard = (card, index) => {
    return (
      <div>
        <Card style={{ width: '18rem' }} key={index} className='box'>
          <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <div className='grid'>
      {cardInfo.map(renderCard)}
    </div>
  );
};

export default About;