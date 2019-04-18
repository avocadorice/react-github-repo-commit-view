import React, { Component } from 'react'

class RepoView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      org: '',
      repos: [],
      error: false
    }

    // Hard coded repositories to avoid exceeding rate limit
    this.mockData = {
      org: 'Netflix',
      repos: [
        {
          id: "123",
          name:"Hystrix",
          forks_count: "100"
        },
        {
          id: "124",
          name:"Asgard",
          forks_count: "50"
        }
      ]
    }

    this.handleErrors = this.handleErrors.bind(this);
  }

  handleErrors(response) {
      if (!response.ok) {
          this.setState({
            org: '',
            repos: [],
            error: true
          })

          this.props.updateCommitView('')

          throw Error(response.statusText);
      }
      return response;
  }

  componentDidUpdate(prevProps) {
    if (this.props.org !== prevProps.org && this.props.org) {

      if(this.props.org) {
        console.log("Load repos...")

        if(process.env.REACT_APP_USE_GITHUB_API === "true") {
          const { org } = this.props

          const url =
            'https://api.github.com/orgs/' + org + '/repos'

          fetch(url)
            .then(this.handleErrors)
            .then(result => result.json())
            .catch(error => {
              console.log(error);
            })
            .then(repos => {
              this.setState({
                org: org,
                repos: repos
              })
            })
        }
        else {
          this.setState(this.mockData)
        }
      }
      else {
        this.setState(this.initialState)
      }
    }
  }

  handleClick(repoName) {
    this.props.updateCommitView(repoName)
  }

  render() {
    const { repos, error } = this.state

    if(repos && repos.length > 0) {
      const repoViews = repos
        .sort((elm1, elm2) => {
          return elm2.forks_count - elm1.forks_count
        })
        .map((entry, index) => {
          return <li key={entry.id} onClick={(e) => this.handleClick(entry.name, e)}><a href="#">{entry.name}</a></li>
      })

      return (
        <div>
          <h2>Repositories</h2>
          <ul>{repoViews}</ul>
        </div>
      )
    }
    else if(error) {
      return <div><h2>No repositories were found for this organization</h2></div>
    }

    return null
  }
}

export default RepoView;
