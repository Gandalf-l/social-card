import React from 'react';
import { observer } from 'mobx-react-lite';
import { UserI } from '../../common/interfaces/User.interface';

import styles from './SocialCard.module.scss';
import iconSet from '../../icomoon/selection.json';
import IcomoonReact  from 'icomoon-react';
import CompanyIcon from './CompanyIcon';
import Avatar from '../Avatar/Avatar';

const SocialCard = observer(({ user }: { user: UserI }) => {

  const toStopPropagation = (link) => {
    link.stopPropagation();
  };

  return (
    <div className={styles.socialCardWrap}>
      <div className={styles.avatarBg}>
        <Avatar src={''} name={user.name} />
      </div>
      <div className={styles.detailsWrap}>
        <div className={styles.name}>
          {user.name}
        </div>
        <div className={styles.contentWrap}>
          <div className={styles.text}>
            <IcomoonReact iconSet={iconSet} size={12} icon='email' />
            <a href={`mailto:${user.email}`} className={styles.textLink}
               onClick={(e) => toStopPropagation(e)}>{user.email}</a>
          </div>
          <div className={styles.text}>
            <IcomoonReact iconSet={iconSet} size={12} icon='contact' />
            {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </div>
          <div className={styles.text}>
            <IcomoonReact iconSet={iconSet} size={12} icon='phone' />
            <a href={`tel:${user.phone}`} className={styles.textLink}
               onClick={(e) => toStopPropagation(e)}>{user.phone}</a>
          </div>
          <div className={styles.text}>
            <IcomoonReact iconSet={iconSet} size={12} icon='website' />
            <a href={`//${user.website}`} className={styles.link}
               onClick={(e) => toStopPropagation(e)}>{user.website}</a>
          </div>
        </div>
        <div className={styles.company}>
          <CompanyIcon />
          <div className={styles.companyDetails}>
            <div className={styles.companyName}>{user.company.name}</div>
            <div className={styles.companyPhrase}>{user.company.catchPhrase}</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SocialCard;
