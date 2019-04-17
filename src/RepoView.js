import React, { Component } from 'react'

class RepoView extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://api.github.com/orgs/Netflix/repos'

    fetch(url)
      .then(result => result.json())
      .then(repos => {
        this.setState({
          data: repos,
        })
      })
  }

  handleClick(repoName) {
    this.props.updateCommitView(repoName)
  }

  render() {
    const { data } = this.state

    const repos = data
      .sort((elm1, elm2) => {
        return elm2.forks_count - elm1.forks_count
      })
      .map((entry, index) => {
        return <li key={entry.id} onClick={(e) => this.handleClick(entry.name, e)}>{entry.name}</li>
    })

    return (
      <div>
        Repositories
        <ul>{repos}</ul>
      </div>
    )
  }
}

export default RepoView;
