import * as React from 'react';

const styles = require('./ServiceChoice.css')

export default class ServiceChoice extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          // activeFilePath: null,
          // currantActiveService: null,
        }
      }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
        </div>
      </div>
    );
  }
}