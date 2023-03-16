import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import SocialCard from '../SocialCard/SocialCard';

import styles from './SocialCards.module.scss';
import usersStore from '../../store/UsersStore';

const SocialCards = observer(() => {
  useEffect(() => {
    usersStore.getMoreUsers();
  }, []);

  const click = () => {
    console.log('click');
  }

  return (
    <>
      <div className={styles.socialCardsWrap}>
        {usersStore.users?.map((user) => {
          return (
            <div onClick={() => click()}>
              <SocialCard key={user.id} user={user} />
            </div>
          );
        })}
      </div>
    </>
  );
});

export default SocialCards;
