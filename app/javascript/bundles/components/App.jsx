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

  returnForm() {
    var csrfToken = document.querySelector('meta[name=csrf-token]').content
    return (
      <form action="/create_audio_clip" acceptCharset="UTF-8" data-remote="true" method="post">
        <input name="utf8" type="hidden" value="✓"/>
        <input type="hidden" name="authenticity_token" value={csrfToken}/>
        <input className="form-control" type="text" name="audio_clip[name]" id="user_name"/>
        <input type="file" name="audio_clip[clip]"/>
        <input type="submit" name="commit" value="Create User" className="mt-3 default-button" data-disable-with="Creating User..."/>
      </form>
      )
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
        {this.returnForm()}
      </div>
    )
  }
}
