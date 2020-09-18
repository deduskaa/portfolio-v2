import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '../public/logo.svg';

export const TopNav = () => {
  const router = useRouter();
  console.log('TopNav -> router', router);
  const { pathname } = router;

  const routes = [
    { title: 'Works', path: '/works' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="border-b border-gray-600 border-opacity-25 p-4 animate-drop-down sticky top-0 bg-black z-10">
      <div className="max-w-screen-xl flex justify-between m-auto">
        <Link href="/">
          <a className="flex items-center">
            <Logo width="32" height="32" className="mr-4" />
            Jenny Tran
          </a>
        </Link>

        <ul className="lg:flex space-x-4 text-gray-500 hidden">
          {routes.map((route) => (
            <li
              key={route.title}
              className={` hover:text-white ${
                pathname === route.path ? 'text-white font-bold border-b-2' : 'text-gray-400'
              }`}
            >
              <Link href={route.path}>
                <a>{route.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
