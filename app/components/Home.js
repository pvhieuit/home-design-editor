// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes.json';
import Iframe from 'react-iframe';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Iframe
          url="https://www.homestyler.com/floorplan/"
          width={window.innerWidth - 10}
          height={window.innerHeight - 10}
        />
      </div>
    );
  }
}
