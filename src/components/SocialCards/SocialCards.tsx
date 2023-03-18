import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import SocialCard from '../SocialCard/SocialCard';
import { Button, Drawer, message } from 'antd';

import styles from './SocialCards.module.scss';
import usersStore from '../../store/UsersStore';
import SocialCardForm from '../SocialCardForm/SocialCardForm';
import { UserI } from '../../common/interfaces/User.interface';

const SocialCards = observer(() => {
  const [open, setOpen] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    usersStore.getMoreUsers();
  }, []);


  const showDrawer = (id: number) => {
    setEditedUser(usersStore.getUserById(id));
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (user: UserI, id) => {
    usersStore.editUser({ ...user, id });
    message.success('Success edit user!');
    onClose();
  }

  const loadMore = () => {
    usersStore.getMoreUsers()
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.socialCardsWrap}>
          {usersStore.users?.map((user) => {
            return (
              <div key={user.id} onClick={() => showDrawer(user.id)} className={styles.socialCards}>
                <SocialCard user={user} />
              </div>
            );
          })}
        </div>
        <Drawer title='Edit social card' placement='right' onClose={onClose} open={open}>
          {open && <SocialCardForm finish={(data, id) => onFinish(data, id)} user={editedUser}/>}
        </Drawer>
        <Button type='primary' onClick={loadMore} size='large'>Load more</Button>
      </div>
    </>
  );
});

export default SocialCards;
