// Importing the React package and deconstructing the Component class
import React, { Component } from "react";

// Importing from the components from the components directory
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";

// Importing the utils/API.js file
import API from "../utils/API";

// Importing components from the Grid folder and deconstructing them
import { Col, Row, Container } from "../components/Grid";

// Importing components from the List folder and deconstructing them
import { List } from "../components/List";

// Declaring the Saved class component
class Saved extends Component {
  // Declaring the state for the Saved and child components
  state = {
    books: []
  };

  // using the componentDidMount() function to invoke the getSavedBooks() upon mounting of the Saved component
  componentDidMount() {
    this.getSavedBooks();
  }

  // A function using the API.getSavedBooks function to make an Axios call to the routes/api directory in the outer node app
  // The .then() takes the response and sets the response into the state using the this.setState()
  // The .catch() there in case there is an error the response is set into the state using the this.setState()
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // A function for handling the delete button
  // Containing a function using the API.deleteBook function to make an Axios call to the routes/api directory in the outer node app
  // The .then() invokes the getSavedBooks() to refresh the page
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  // Using ReactDOM.render to render the Container component
  // This returns the Container populated with other components and props
  // The second Row component contains the Results card and a .map() to iterate over the results and create a card for each
  // The conditional (ternary) operator - condition ? exprTrue : exprFalse - is used to render No Saved Books when books is empty
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

// Exporting the Saved page component
export default Saved;
