import Link from 'next/link';

const About = () => {
  return (
    <div className="mt-8 ml-6 pb-4">
      <h2 className="text-4xl font-semibold text-cyan-100 font-title">
        i&apos;m currently
      </h2>
      <ul className="mt-4 pl-8 text-2xl text-md text-accent-secondary list-disc">
        <li className="pb-3">learning lots of math</li>
        <li className="pb-3">
          getting better at competitive programming (
          <Link
            href="https://codeforces.com/profile/ameywtf"
            className="text-amber-200 hover:text-accent focus:text-accent"
          >
            <span>codeforces</span>
          </Link>
          )
        </li>

        <li className="pb-3">
          learning about and building noob crypto/ai projects
        </li>
      </ul>
    </div>
  );
};

export default About;
