import type { Dispatch, SetStateAction } from 'react';
import type { contentDisplay } from 'types';
import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  InstagramLogoIcon
} from '@radix-ui/react-icons';
const buttonClass =
  'text-amber-200 focus:outline-none focus:ring-1 font-medium rounded-lg text-4xl px-4 py-4 mr-2 focus:ring-gray-700 border-gray-700';

interface Props {
  setDisplay: Dispatch<SetStateAction<contentDisplay>>;
}

const Navbar = ({ setDisplay }: Props) => {
  return (
    <nav className="flex mt-20 space-x-4">
      {/* <button className={buttonClass} onClick={() => setDisplay('home')}>
        /home
      </button>
      <button className={buttonClass} onClick={() => setDisplay('tech')}>
        /knows
      </button> */}
    </nav>
  );
};

export default Navbar;
