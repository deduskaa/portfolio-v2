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

  const variants = { initial: {}, hover: { color: '#fff' } };

  const scaleLine = { hidden: { scale: 0 }, hover: { scale: 1.2, transition: { duration: 0.3 } } };

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
              <motion.li
                key={route.title}
                variants={variants}
                whileHover="hover"
                className={pathname === route.path ? 'text-white' : ''}
              >
                <Link href={route.path}>
                  <a>{route.title}</a>
                </Link>
                <motion.div
                  variants={scaleLine}
                  whileHover="hover"
                  initial={pathname === route.path ? 'hover' : 'hidden'}
                  className="mt-1 rounded-lg h-2px bg-white w-full"
                ></motion.div>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </AnimateSharedLayout>
  );
};
