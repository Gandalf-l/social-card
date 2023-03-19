import React from 'react';
import { Spin } from 'antd';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.spinWrap}>
      <Spin size='large' />
    </div>
  );
};

export default Loader;
