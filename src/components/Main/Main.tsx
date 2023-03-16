import React from 'react';
import SocialCards from '../SocialCards/SocialCards';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <SocialCards/>
    </main>
  );
};

export default Main;
