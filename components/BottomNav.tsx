import React from 'react';
import Link from 'next/link';

export const BottomNav = () => {
  return (
    <nav className="lg:hidden bg-black sticky bottom-0">
      <ul className="flex space-x-4 text-gray-500 p-4 justify-evenly border-t border-gray-600 border-opacity-25">
        <li className="hover:text-white">
          <Link href="/works">
            <a>Works</a>
          </Link>
        </li>
        <li className="hover:text-white">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className="hover:text-white">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
