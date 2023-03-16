import React from 'react';

import styles from './Avatar.module.scss';

const Avatar = ({ src, name }: { src: string, name: string }) => {

  const getInitials = (name) => {
    return name.split(' ').map((n) => n.slice(0, 1));
  };

  return (
    <div className={styles.avatar}>
      {src ?
        <img src={src} alt='avatar' /> :
        <div className={styles.avatarName}>
          {getInitials(name)}
        </div>
      }
    </div>
  );
};

export default Avatar;
