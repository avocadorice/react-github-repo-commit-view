import React, { Component } from 'react'

class CommitView extends Component {
  /*
  constructor(props) {
    super(props)

    this.initialState = {
      repo: this.props.repo,
      commits: ''
    }

    this.state = this.initialState
  }

  componentDidMount() {
    console.log("CommitView componentDidMount")

    this.fetchCommits()
  }

  fetchCommits() {
    const { repo } = this.props

    if(repo) {
      const url =
        'https://api.github.com/repos/Netflix/' + repo + '/commits';

      fetch(url)
        .then(result => result.json())
        .then(commits => {
          this.setState({
            commits: commits
          })
      })
    }
  }
  */

  handleClick(repoName) {
  }

  render() {
    console.log("CommitView render")
    const { repoCommitsData } = this.props

    console.log(repoCommitsData)

    if (repoCommitsData) {
      const commits = repoCommitsData
        .map((entry, index) => {
          return <li key={index} onClick={(e) => this.handleClick(entry.name, e)}>{entry}</li>
      })

      return (
        <div>
          Commits
          <ul>{commits}</ul>
        </div>
      )
    }

    return <div>Loading...</div>;
  }
}

export default CommitView;
