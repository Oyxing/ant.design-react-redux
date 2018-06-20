import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { UserApp } from '../containers'

function IndexPage() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <UserApp />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
