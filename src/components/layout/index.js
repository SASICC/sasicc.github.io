import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Global } from './style';

export const Layout = ({ children, bodyImg }) => {
  return (
    <Scrollbars className='scrollbars'  >
      <Global backgroundImage={bodyImg}  />
        {children}
    </Scrollbars>
  );
};