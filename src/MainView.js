import React, { Component } from 'react'
import Search from './Search'
import RepoView from './RepoView'
import CommitView from './CommitView'
import DiffView from './DiffView'
import {parseDiff, Diff, Hunk, Decoration} from 'react-diff-view';

class MainView extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      org: '',
      repoName: '',
      commitSha: ''
    }

    this.state = this.initialState

    this.handleSearch = this.handleSearch.bind(this);
    this.handleCommitViewUpdate = this.handleCommitViewUpdate.bind(this);
    this.handleDiffViewUpdate = this.handleDiffViewUpdate.bind(this);
  }

  handleSearch(searchText) {
      if(searchText !== this.state.org) {
        this.setState({
          org: searchText,
          repoName: '',
          commitSha: ''
        })
      }
  }

  handleCommitViewUpdate(repoName) {
    this.setState({
      org: this.state.org,
      repoName: repoName,
      commitSha: ''
    })
  }

  handleDiffViewUpdate(sha) {
    this.setState({
      org: this.state.org,
      repoName: this.state.repoName,
      commitSha: sha
    })
  }

  render() {
    const { org, repoName, commitSha} = this.state

    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <div className='rowC'>
          <RepoView org={org} updateCommitView={this.handleCommitViewUpdate}/>
          <CommitView org={org} repoName={repoName} updateDiffView={this.handleDiffViewUpdate}/>
          <DiffView org={org} repoName={repoName} commitSha={commitSha}/>
        </div>
      </div>
    )

  }
}

export default MainView
