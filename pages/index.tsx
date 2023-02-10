import { useState } from 'react';

import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  InstagramLogoIcon
} from '@radix-ui/react-icons';

import { Tech, TechStack } from 'components/TechStack';
import About from 'components/About';
import Navbar from 'components/Navbar';

import type { contentDisplay } from 'types';

const CONTENT_MAP: Record<contentDisplay, JSX.Element> = {
  home: <About />,
  tech: <TechStack />
};

const Home = () => {
  const [content, setContent] = useState<contentDisplay>('home');

  return (
    <>
      <Navbar setDisplay={setContent} />

      <div className="mt-6 ml-4">
        <h1 className="text-7xl font-bold text-accent font-title">
          sup nerd, it&apos;s amey<span className="text-gray-500">#2309</span>
        </h1>
      </div>

      <div className="grid grid-flow-col w-36 text-xl  m-10 ml-4">
        <a
          href="https://twitter.com/ameywtf"
          target="_blank"
          rel="noreferrer"
          className="transition duration-150 hover:opacity-80 pr-6"
        >
          <TwitterLogoIcon className="w-8 h-8" />
        </a>

        <a
          href="https://instagram.com/amey"
          target="_blank"
          rel="noreferrer"
          className="transition duration-150 hover:opacity-80 pr-6"
        >
          <InstagramLogoIcon className="w-8 h-8" />
        </a>

        <a
          href="https://github.com/ameywtf"
          target="_blank"
          rel="noreferrer"
          className="transition duration-150 hover:opacity-80 pr-6"
        >
          <GitHubLogoIcon className="w-8 h-8" />
        </a>

        <button
          className="transition duration-150 hover:opacity-80 pr-6"
          onClick={() => navigator.clipboard.writeText('ameymeow@gmail.com')}
        >
          <EnvelopeClosedIcon className="w-8 h-8" />
        </button>
      </div>

      {CONTENT_MAP[content]}
      <TechStack />
    </>
  );
};

export default Home;
