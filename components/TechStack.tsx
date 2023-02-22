interface TechStackProps {
  name: string;
  elements: string[];
}

export const Tech = ({ name, elements }: TechStackProps) => {
  return (
    <div className="flex flex-wrap mt-4 space-x-2 text-2xl text-accent-secondary">
      <h3 className="text-accent-secondary text-md">{name}:</h3>
      {elements.map((element, index) => (
        <div key={index}>
          <p>
            {element}
            {index < elements.length - 1 && ','}
          </p>
        </div>
      ))}
    </div>
  );
};

export const TechStack = () => {
  return (
    <div className="pb-5 mt-8 ml-6">
      <h2 className="text-4xl font-semibold text-cyan-100 font-title">
        techstack
      </h2>

      <div>
        <ul className="ml-8 list-disc">
          <li>
            <Tech
              name="languages"
              elements={['c++', 'javascript', 'solidity', 'python']}
            />
          </li>
          <li>
            <Tech
              name="frontend"
              elements={['react', 'next.js', 'tailwind-css']}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
