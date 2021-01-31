import React from 'react';
import { Global } from './style';

export const Layout = ({ children, bodyImg }) => {
  return (
    <div className='scrollbars'  >
      <Global backgroundImage={bodyImg}  />
        {children}
    </div>
  );
};