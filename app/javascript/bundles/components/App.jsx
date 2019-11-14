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

  createAudioClip = (e) => {
    e.preventDefault();
    var formElement = document.querySelector('[audio-clip-form]')
    var data = new FormData(formElement)
    var csrfToken = document.querySelector('meta[name=csrf-token]').content
    fetch('/create_audio_clip', {
      method: 'POST',
      body: data,
      headers: {
        'X-CSRF-Token': csrfToken
      }
    })
  }

  render() {
    return (
      <div>
        <h3>
          FileName: {this.state.name}!
        </h3>
        <hr />
        <form 
          audio-clip-form=''
          onSubmit={this.createAudioClip}
        >
          <input
            id="name"
            name="audio_clip[name]"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
          <input
            id="clip"
            name="audio_clip[clip]"
            data-audio-clip=''
            type='file'
          />
          <input
            type='submit'
            value='Create an Audio Clip'
          />
        </form>
      </div>
    )
  }
}
