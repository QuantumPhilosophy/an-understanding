// Importing the React package
import React from 'react'

// Importing components from the Grid folder and deconstructing them
import { Col, Row, Container } from '../components/Grid'

// Importing the Jumbotron component from the components directory
import Jumbotron from '../components/Jumbotron'

// Declaring the App functional component
// This returns the Container populated with other components and props
function NoMatch () {
  return (
    <Container fluid>
      <Row>
        <Col size='md-12'>
          <Jumbotron>
            <h1 className='text-center'>404 Page Not Found</h1>
            <h1 className='text-center'>
              <span role='img' aria-label='Face With Rolling Eyes Emoji'>
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

// Exporting the NoMatch page component
export default NoMatch
