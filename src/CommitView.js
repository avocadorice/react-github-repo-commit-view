import React, { Component } from 'react'

class CommitView extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      org: '',
      repoName: '',
      repoCommits: []
    }

    this.state = this.initialState

    // Hard coded repo commits to avoid exceeding rate limit
    this.mockData = {
      repoCommits:[{
        "sha": "648102625a4b6d2c3669b7837c2a5768c20b16a3",
        "commit": {
          "message": "Update OSSMETADATA\n\nAsgard is unused at Netflix",
        }
      },
      {
        "sha": "825ff569410dd063755873a37326513f807f914b",
        "commit": {
          "message": "Merge pull request #723 from zanthrash/fix_fp_cache\n\nremoves Fast Property caching so app can start up.",
        }
      }]
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.repoName !== prevProps.repoName) {
      if(this.props.repoName) {
        console.log("Load commits...")

        if(process.env.REACT_APP_USE_GITHUB_API === "true") {
          const { org, repoName } = this.props

          const url =
            'https://api.github.com/repos/' + org + '/' + repoName + '/commits';


          fetch(url)
            .then(result => result.json())
            .then(commits => {
              this.setState({
                repoCommits: commits
              })
            })
        }
        else {
          this.setState(this.mockData)
        }
      }
      else {
        // clear the view
        this.setState(this.initialState)
      }
    }
  }

  handleClick(event, entry) {
    this.props.updateDiffView(entry.sha)
  }

  render() {
    const { repoCommits } = this.state

    if (repoCommits && repoCommits.length > 0) {
      const commits = repoCommits
        .map((entry, index) => {
          return <li key={index} onClick={(e) => this.handleClick(e, entry)}>{entry.commit.message}</li>
      })

      return (
        <div>
          <h3>Commits</h3>
          <ul>{commits}</ul>
        </div>
      )
    }

    return null
  }
}

export default CommitView;
