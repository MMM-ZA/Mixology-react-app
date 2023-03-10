import { useState } from "react";
import SectionItem from "./SectionItem";
import gin from './../../Assets/gin.png';
import whiskey from './../../Assets/whiskey.png';
import tequila from './../../Assets/tequila.png';
import rum from './../../Assets/rum.png';
import vodka from './../../Assets/vodka.png';
import brandy from './../../Assets/brandy.png';

const sectionData = [
  {
    id: 's1',
    name: 'Gin',
    description: 'Gin is a clear, high-proof spirit that is flavored with botanicals, typically juniper berries, and other herbs and spices. It is often used in cocktails and is known for its distinctive pine and citrus flavors.',
    backgroundImage: gin,
  },
  {
    id: 's2',
    name: 'Whiskey',
    description: 'Whiskey is a spirit made from fermented grains, typically barley, corn, rye, or wheat, and aged in oak barrels. There are several different types of whiskey, including bourbon, Scotch, and Irish whiskey, each with its own distinct flavor profile.',
    backgroundImage: whiskey,
  },
  {
    id: 's3',
    name: 'Tequila',
    description: 'Tequila is a spirit made from the blue agave plant, which is native to Mexico. It is typically produced in the state of Jalisco and is known for its distinctive smoky and earthy flavors. Tequila is often enjoyed as a shot or mixed in cocktails such as margaritas.',
    backgroundImage: tequila,
  },
  {
    id: 's4',
    name: 'Rum',
    description: 'Rum is a spirit made from sugarcane or molasses that is fermented and distilled. It is typically aged in oak barrels and has a sweet and slightly spicy flavor. Rum is often used in cocktails such as mojitos and daiquiris.',
    backgroundImage: rum,
  },
  {
    id: 's5',
    name: 'Vodka',
    description: 'Vodka is a clear, neutral-tasting spirit that is made from fermented grains, potatoes, or other starches.',
    backgroundImage: vodka,
  },
  {
    id: 's6',
    name: 'Brandy',
    description: 'Brandy is a spirit made from fermented fruit, typically grapes, and then aged in oak barrels. It has a rich and complex flavor and is often enjoyed as an after-dinner drink. Brandy is also used in cooking and baking.',
    backgroundImage: brandy,
  },
];

const SectionContents = () => {
  const [active, setActive] = useState(sectionData[0].id);

  return (
    <ul>
      {sectionData.map((section) => (
        <SectionItem
          key={section.id}
          section={section}
          active={active === section.id}
          onClick={() => setActive(section.id)}
        />
      ))}
    </ul>
  );
};

export default SectionContents;
