import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faFileAlt, faMailBulk, faMailForward, faPenNib } from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';

import Animate from '@/components/Animate';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
import { NavigationItem } from '@/types';

const NAVIGATION: NavigationItem[] = [
  {
    type: 'link',
    href: '/projects',
    icon: faCode,
    text: 'Projects',
  },
  {
    type: 'link',
    external: true,
    href: 'https://github.com/ncm88',
    icon: faGithub,
    text: 'GitHub',
  },
  {
    type: 'link',
    href: '/files/mccleary_resume1.pdf ',
    icon: faFileAlt,
    text: 'Resume',
  },
  {
    type: 'link',
    href: '/contact',
    icon: faMailBulk,
    text: 'Message me',
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-md sm:max-w-lg md:sm:max-w-2xl lg:sm:max-w-3xl w-full space-y-8 text-center">
          <Animate
            as="h1"
            animation={{ opacity: [0, 1], scale: [0.75, 1] }}
            className="text-gray-500 dark:text-white text-5xl sm:text-6xl md:text-6xl lg:text-8xl tracking-tight font-extrabold"
          >
            Howdy &#x1F920;
          </Animate>

          <Animate
            as="p"
            animation={{ opacity: [0, 1], scale: [0.75, 1] }}
            className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-400 dark:text-gray-300 sm:text-lg md:text-xl md:max-w-3xl"
            transition={{ delay: 0.5 }}
          >
            This site is an attempt to both showcase some of my work directly as well as provide a convenient way of
            accessing my latest CV, contact info, and project repos. I hope you enjoy.
          </Animate>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4">
            {NAVIGATION.map((link, index) => {
              if (link.type !== 'link') return null;

              return (
                <Animate
                  key={index}
                  className="w-full sm:w-auto"
                  animation={{ y: [50, 0], opacity: [0, 1] }}
                  transition={{ delay: 0.1 * (index + 2) + 0.5 }}
                >
                  <Button href={link.href} icon={link.icon} outline>
                    <span>{link.text}</span>
                  </Button>
                </Animate>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
