import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Movie extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  addLibraryButton = (
    <button
      className="btn btn-outline-success"
      onClick={() => this.props.handleAddedToLibraryCallback({ ...this.props })}
    >
      Add to Library
    </button>
  );

  inLibraryMessage = <Button variant='danger' disabled> In Movie Library</Button>;

  selectedMovieMessage = <Button variant="danger" disabled>Movie Selected</Button>;

  selectMovieButton = (
    <button
      className="btn btn-outline-success"
      onClick={() => this.props.handleMovieSelectCallback({ ...this.props })}
    >
      {' '}
      Select{' '}
    </button>
  );

  dynamicButton = () => {
    if (this.props.selected) {
      return this.selectedMovieMessage;
    } else if (this.props.selectable) {
      return this.selectMovieButton;
    } else if (!this.props.in_library) {
      return this.addLibraryButton;
    } else {
      return this.inLibraryMessage;
    }
  };

  render() {
    return (
      <div className="movie-list-container">
        <div
          className="movie-card-container card bg-light mb-3"
          type="button"
          variant="primary"
          onClick={this.handleShow}
        >
          <p className="movie-title">{this.props.title}</p>
          <img
            className="card-img-top"
            src={this.props.image_url}
            alt="movie photo"
          />
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>External ID: {this.props.external_id}</p>
            <p>Overview: {this.props.overview}</p>
            <p>Release Date: {this.props.release_date}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            {this.dynamicButton()}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  image_url: PropTypes.string,
  external_id: PropTypes.number,
  in_library: PropTypes.bool,
  selectable: PropTypes.bool,
  handleAddedToLibraryCallback: PropTypes.func,
  movieSelectCallback: PropTypes.func,
};

export default Movie;
// render(<Movie />);
