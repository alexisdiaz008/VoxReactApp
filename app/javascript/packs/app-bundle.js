import ReactOnRails from 'react-on-rails';

import App from '../bundles/components/App';

// This is how React on Rails is able to reference your component from a Rails view.
// this replaces ReactDOM.render(<App />, document.getElementById("root")) for us, as we now reference with:
// <%= react_component("App", props: @hello_world_props, prerender: false) %>

ReactOnRails.register({
  App,
});
