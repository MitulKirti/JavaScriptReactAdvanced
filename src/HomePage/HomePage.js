import React, { useState } from 'react';
import { Row, Col, Button, Nav, Image } from 'react-bootstrap';
import './HomePage.scss';
import Map from '../Map/Map';

const HomePage = (props) => {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState('');
  return (
    <>
    
      <p className='title-name'> {title}</p>
      <Button
            onClick={() => setTitle('Title reset')}
            variant='outline-success'
            className='title-btn'
          >
            Click here to reset the title!
          </Button>
      <Row className='title-block'>
        <Col >
          <Image
            src='../assets/nature-images.jpg'
            alt='nature'
            className='nature-img'
          />
          
        </Col>
      </Row>
      <Map setTooltipContent={setContent}/>
    </>
  );

};

export default HomePage;
