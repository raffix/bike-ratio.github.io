import React, { ReactNode } from 'react';
import { Menu } from '../menu';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container">
      <Menu />
      <main>{ children }</main>
    </div>
  );
};

export default Layout;