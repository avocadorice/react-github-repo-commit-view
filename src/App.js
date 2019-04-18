import React, { Component } from 'react'
import Search from './Search'
import {parseDiff, Diff, Hunk, Decoration} from 'react-diff-view';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      diffText: this.props.diffText
    }
  }
  render() {
    const { diffText } = this.state

    const files = parseDiff(diffText);
    console.log(files)

    const renderFile = ({oldRevision, newRevision, type, hunks}) => (
        <Diff key={oldRevision + '-' + newRevision} viewType="split" diffType={type} hunks={hunks}>
            {hunks => hunks.map(hunk => (
                <Decoration key={'decoration-' + hunk.content}>
                    {hunk.content}
                </Decoration>,
                <Hunk key={hunk.content} hunk={hunk} />
              )
            )}
        </Diff>
    );

    return (
        <div>
            <Search/>
            <div>{files.map(renderFile)}</div>
        </div>
    );
  }
}
/*
const App = ({diffText}) => {
    const files = parseDiff(diffText);
    console.log(files)

    const renderFile = ({oldRevision, newRevision, type, hunks}) => (
        <Diff key={oldRevision + '-' + newRevision} viewType="split" diffType={type} hunks={hunks}>
            {hunks => hunks.map(hunk => (
                <Decoration key={'decoration-' + hunk.content}>
                    {hunk.content}
                </Decoration>,
                <Hunk key={hunk.content} hunk={hunk} />
              )
            )}
        </Diff>
    );

    return (
        <div>
            <Search/>
            <div>{files.map(renderFile)}</div>
        </div>
    );
};
*/

export default App
