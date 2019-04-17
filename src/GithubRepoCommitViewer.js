import React, { Component } from 'react'
import RepoView from './RepoView'
import CommitView from './CommitView'
import DiffView from './DiffView'

class GithubRepoCommitViewer extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      repoCommits: ''
    }

    this.state = this.initialState

    this.handleCommitViewUpdate = this.handleCommitViewUpdate.bind(this);
  }

  handleCommitViewUpdate(repoName) {
    // this.setState({
    //   repo: repoName
    // })

    const url =
      'https://api.github.com/repos/Netflix/' + repoName + '/commits';

    console.log(url)

    fetch(url)
      .then(result => result.json())
      .then(commits => {
        this.setState({
          repoCommits: commits.map((entry, index) => entry.commit.message)
        })
      })
  }

  render() {
    console.log("App render")
    const {repoCommits} = this.state

    return (
      <div className='rowC'>
        <RepoView updateCommitView={this.handleCommitViewUpdate}/>
        <CommitView repoCommitsData={repoCommits}/>
        <DiffView/>
      </div>
    )
  }
}

export default GithubRepoCommitViewer
