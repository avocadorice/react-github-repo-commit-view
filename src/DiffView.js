import React, { Component } from 'react'
//import Frame from 'react-frame-component';

class DiffView extends Component {
  state = {
    diffText: ''
  }
  componentDidMount() {
    const url = 'https://api.github.com/repos/Netflix/asgard/commits/825ff569410dd063755873a37326513f807f914b'
/*
    fetch(url, {
      headers: {
        "Accept": "application/vnd.github.VERSION.patch"
      }
    })
    .then(result => {
      this.setState({
        diffText: result
      })
    })
*/
  }

  render() {
    const { diffText } = this.state

    return ''
/*
    return (
      <div>{diffText}</div>
    )
    */
  }
}

export default DiffView;
