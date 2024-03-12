import React from "react";
import Link from "next/link";

export function Menu():React.ReactNode {

  const navItems: Array<{href: string, text: string}> = [
    {href: '/', text: 'Home'},
    {href: '/brand', text: 'Brand'}
  ];

  return (
    <>
      <nav>
        {navItems.map((item, index) => {
          return (
            <Link id={ item.text } href={ item.href } className="">
              { item.text }
            </Link>
          );
        })}
      </nav>
    </>
  );
}
