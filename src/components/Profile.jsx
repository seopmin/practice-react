import React from 'react';
import Avatar from './Avatar';

export default function Profile({image, isNew, name, info}) {
  return (
    <div className='profile'>
      <Avatar 
      image={image}
      isNew={isNew}
      />
      <h1>{name}</h1>
      <p>{info}</p>
    </div>
  );
}
