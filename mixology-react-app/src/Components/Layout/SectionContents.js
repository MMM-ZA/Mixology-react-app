import { useState } from "react";
import Card from "../UI/Card";

const sectionData = [
  {
    id: 's1',
    name: 'Gin',
    description: 'Finest fish and veggies',
    backgroundImage: 'url("/path/to/image.jpg")',
  },
  {
    id: 's2',
    name: 'Whiskey',
    description: 'Finest fish and veggies',
    backgroundImage: 'url("/path/to/image.jpg")',
  },
  {
    id: 's3',
    name: 'Tequilla',
    description: 'Finest fish and veggies',
    backgroundImage: 'url("/path/to/image.jpg")',
  },
  {
    id: 's4',
    name: 'Rum',
    description: 'Finest fish and veggies',
    backgroundImage: 'url("/path/to/image.jpg")',
  },
  {
    id: 's5',
    name: 'Vodka',
    description: 'Finest fish and veggies',
    backgroundImage: 'url("/path/to/image.jpg")',
  },
  {
    id: 's6',
    name: 'Brandy',
    description: 'Finest fish and veggies',
    backgroundImage: 'url("/path/to/image.jpg")',
  },
];


const SectionContents = () => {
  const [activeSection, setActiveSection] = useState(sectionData[0].id);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div>
      <ul>
        {sectionData.map(({ id, name }) => (
          <li key={id}>
            <button onClick={() => handleSectionClick(id)}>{name}</button>
          </li>
        ))}
      </ul>
      {sectionData.map(({ id, name, description, backgroundImage }) =>
        id === activeSection ? (
          <div key={id}>
            <h2>{name}</h2>
            <p>{description}</p>
            <div style={{ backgroundImage }}></div>
          </div>
        ) : null
      )}
      <Card/>
    </div>
  );
};

export default SectionContents;
