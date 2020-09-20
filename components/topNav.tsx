import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '../public/logo.svg';
import { AnimateSharedLayout, motion } from 'framer-motion';

export const TopNav = () => {
  const router = useRouter();
  const { pathname } = router;

  const routes = [
    { title: 'Works', path: '/works' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <AnimateSharedLayout>
      <nav className="border-b border-gray-600 border-opacity-25 p-4 sticky top-0 bg-black z-20">
        <div className="max-w-screen-xl flex justify-between m-auto">
          <Link href="/">
            <a className="flex items-center">
              <Logo width="32" height="32" className="mr-4" />
              Jenny Tran
            </a>
          </Link>

          <ul className="lg:flex space-x-4 text-gray-500 hidden">
            {routes.map((route) => (
              <li key={route.title} className="hover:text-white">
                <Link href={route.path}>
                  <a>{route.title}</a>
                </Link>
                {pathname === route.path && (
                  <motion.div
                    initial={false}
                    layoutId="outline"
                    animate={{ background: 'pink' }}
                    className="mt-1 rounded-full h-1 bg-white w-full"
                  ></motion.div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </AnimateSharedLayout>
  );
};
