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
    description: 'The classic London dry gin is like a sophisticated spy movie - smooth, crisp, and full of intrigue. With a blend of botanicals, juniper berries, and a touch of citrus, gin is the perfect choice for a refreshing cocktail.',
    backgroundImage: gin,
  },
  {
    id: 's2',
    name: 'Whiskey',
    description: 'Whiskey is like a warm, comforting hug in a glass. This classic spirit is made from fermented grain mash and aged in oak barrels, giving it a rich, complex flavor. ',
    backgroundImage: whiskey,
  },
  {
    id: 's3',
    name: 'Tequila',
    description: 'Tequila is the life of the party - bold, lively, and always ready to have a good time. Made from the blue agave plant, this Mexican spirit is perfect for a night of margaritas or shots with friends',
    backgroundImage: tequila,
  },
  {
    id: 's4',
    name: 'Rum',
    description: ' Rum is like a tropical vacation in a glass - sweet, spicy, and full of sunshine. Made from sugarcane, this Caribbean spirit is perfect for sipping on a hot day or mixing up a classic cocktail like a Mai Tai or a Mojito. ',
    backgroundImage: rum,
  },
  {
    id: 's5',
    name: 'Vodka',
    description: 'Vodka is like a chameleon - it can blend into any cocktail and take on any flavor you want it to. Made from fermented grains or potatoes, this versatile spirit is perfect for mixing up a classic martini or a refreshing Moscow Mule. ',
    backgroundImage: vodka,
  },
  {
    id: 's6',
    name: 'Brandy',
    description: 'Brandy is like a warm and cozy fireplace on a chilly winter night. This elegant spirit is made by distilling wine and then aging it in oak barrels.It has rich, deep flavor notes of vanilla and caramel',
    backgroundImage: brandy,
  },
];

const SectionContents = () => {
  const [active, setActive] = useState(sectionData[0].id);

  return (
    <div>
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


    </div>
  );
};

export default SectionContents;
