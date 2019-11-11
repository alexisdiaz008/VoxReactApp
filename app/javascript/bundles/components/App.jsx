import PropTypes from 'prop-types';
import React from 'react';

export default class App extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    this.state = { name: this.props.name };
    this.createAudioClip = this.createAudioClip.bind(this)
  }

  updateName = (name) => {
    this.setState({ name });
  };

  createAudioClip = (name) => {
    var csrfToken = document.querySelector('meta[name=csrf-token]').content
    console.log(csrfToken)
    fetch('/create_audio_clip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      }
    })
  }

  render() {
    return (
      <div>
        <h3>
          Hello, {this.state.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>
        <button onClick={this.createAudioClip}>
          Press Me
        </button>
      </div>
    );
  }
}
