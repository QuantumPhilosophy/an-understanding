// Importing the React package and deconstructing the Component class
import React, { Component } from "react";

// Importing from the components from the components directory
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";

// Importing the utils/API.js file
import API from "../utils/API";

// Importing components from the Grid folder and deconstructing them
import { Col, Row, Container } from "../components/Grid";

// Importing components from the List folder and deconstructing them
import { List } from "../components/List";

// Declaring the Home class component
class Home extends Component {
  // Declaring the state for the Home and child components
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  // A function for handling input on the page
  // Two consts are declared and their values set from the event.target
  // this.setState is setting the state of the page as the user types
  // The [] around name makes the "key" in this case dynamic
  // This is so the same function can be used for multiple inputs on the page
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // A function using the API.getBooks function to make an Axios call to the routes/api directory in the outer node app
  // The .then() takes the response and sets the response into the state using the this.setState()
  // The .catch() there in case there is an error the response is set into the state using the this.setState()
  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  // A function for handling the submit button
  // Preventing default events so the page does not refresh on form submit
  // Then making a getBooks() call
  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  // A function for handling the save button
  // Containing a function using the API.saveBook function to make an Axios call to the routes/api directory in the outer node app
  // The .then() takes the response and calls getBooks()
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  // Using ReactDOM.render to render the App component
  // This returns the Container populated with other components and props
  // The second Row component contains the Results card and a .map() to iterate over the results and create a card for each
  // The conditional (ternary) operator - condition ? exprTrue : exprFalse - is used to render {this.state.message} when books is empty
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
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

// Exporting the Home page component
export default Home;
