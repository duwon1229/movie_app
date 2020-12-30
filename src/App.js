// import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';


class App extends React.Component{
  state = {
    isLoading: true,
    move: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  }

  render() {
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  }
}

export default App;
