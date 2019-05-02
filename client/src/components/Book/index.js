// Importing the React package
import React from 'react'

// Importing components from the List folder and deconstructing them
import { ListItem } from '../List'

// Importing components from the Grid folder and deconstructing them
import { Row, Col } from '../Grid'

// Importing CSS
import './style.css'

// Declaring the ListItem functional component
// This returns a ListItem component populated with other components and props
function Book ({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem>
      <Row className='flex-wrap-reverse'>
        <Col size='md-8'>
          <h3 className='font-italic'>{title}</h3>
          {subtitle && <h5 className='font-italic'>{subtitle}</h5>}
        </Col>
        <Col size='md-4'>
          <div className='btn-container'>
            <a className='btn btn-light' target='_blank' rel='noopener noreferrer' href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size='md-6'>
          <p className='font-italic small'>Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size='12 sm-4 md-2'>
          <img className='img-thumbnail img-fluid w-100' src={image} alt={title} />
        </Col>
        <Col size='12 sm-8 md-10'>
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  )
}

// Exporting the Book component
export default Book
