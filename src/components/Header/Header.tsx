import React, { useState } from 'react';
import { Button, Drawer, message } from 'antd';
import { UserI } from '../../common/interfaces/User.interface';

import styles from './Header.module.scss';
import usersStore from '../../store/UsersStore';
import SocialCardForm from '../SocialCardForm/SocialCardForm';

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (user: UserI) => {
    usersStore.addUser(user);
    message.success('Success create user!');
    onClose();
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.title}>
          Social Cards
        </div>
        <Button type='primary' onClick={showDrawer} size='large' className={styles.addButton}>
          Add
        </Button>
        <Drawer title='Create social card' placement='right' onClose={onClose} open={open}>
          {open && <SocialCardForm finish={(data) => onFinish(data)} />}
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
