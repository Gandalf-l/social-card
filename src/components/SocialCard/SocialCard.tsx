import React  from 'react';
import { observer } from 'mobx-react-lite';
import { UserI } from '../../common/interfaces/User.interface';

import styles from './SocialCard.module.scss';
import iconSet from "../../icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import CompanyIcon from './CompanyIcon';
import Avatar from '../Avatar/Avatar';

const SocialCard = observer(({user}: {user: UserI}) => {
  return (
    <div className={styles.socialCardWrap}>
      <div className={styles.avatarBg}>
        <Avatar src={''} name={user.name}/>
      </div>
      <div>
        <div className={styles.name}>
          {user.name}
        </div>
        <div>
          <IcomoonReact iconSet={iconSet} size={12} icon="email" />
          {user.email}
        </div>
        <div>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</div>
        <div>{user.phone}</div>
        <a href={user.website}>{user.website}</a>
        <div>
          <CompanyIcon/>
          <div>
            <div>{user.company.name}</div>
            <div>{user.company.catchPhrase}</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SocialCard;
