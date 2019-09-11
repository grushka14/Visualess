import * as React from 'react';

const styles = require('./Function.css')


export default class Function extends React.Component {

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