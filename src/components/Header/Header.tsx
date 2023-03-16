import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

import styles from './Header.module.scss';
import SocialCardForm from '../SocialCardForm/SocialCardForm';

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.title}>
          Social Cards
        </div>
        <Button type='primary' onClick={showDrawer} size='large'>
          Add
        </Button>
        <Drawer title='Create social card' placement='right' onClose={onClose} open={open}>
          <SocialCardForm/>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
