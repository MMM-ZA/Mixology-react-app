import { useState } from "react";
import SectionItem from "../Layout/SectionItem";


const DUMMY_DATA = [
  {
    id:'d1',
    section:'Gin',
    name: 'gin and tonic',
    price: 16.99,

  },
  {
    id: 'd2',
    section: 'Gin',
    name: 'Negroni',
    price: 18.99,
  },
  {
    id: 'd3',
    section: 'Gin',
    name: 'Tom Collins',
    price: 17.99,
  },
  {
    id: 'd4',
    section: 'Gin',
    name: 'Martini',
    price: 19.99,
  },
   {
    id: 'd5',
    section: 'Whiskey',
    name: 'Old Fashioned',
    price: 18.99,
  },
  {
    id: 'd6',
    section: 'Whiskey',
    name: 'Manhattan',
    price: 19.99,
  },
  {
    id: 'd7',
    section: 'Whiskey',
    name: 'Whiskey Sour',
    price: 17.99,
  },
  {
    id: 'd8',
    section: 'Whiskey',
    name: 'Irish Coffee',
    price: 15.99,
  },
  {
    id: 'd9',
    section: 'Tequila',
    name: 'Margarita',
    price: 14.99,
  },
  {
    id: 'd10',
    section: 'Tequila',
    name: 'Tequila Sunrise',
    price: 12.99,
  },
  {
    id: 'd11',
    section: 'Tequila',
    name: 'Paloma',
    price: 13.99,
  },
  {
    id: 'd12',
    section: 'Tequila',
    name: 'Mexican Mule',
    price: 15.99,
  },
   {
    id: 'd13',
    section: 'Rum',
    name: 'Daiquiri',
    price: 14.99,
  },
  {
    id: 'd14',
    section: 'Rum',
    name: 'Mojito',
    price: 12.99,
  },
  {
    id: 'd15',
    section: 'Rum',
    name: 'Piña Colada',
    price: 13.99,
  },
  {
    id: 'd16',
    section: 'Rum',
    name: 'Dark and Stormy',
    price: 15.99,
  },
  {
    id: 'd17',
    section: 'Vodka',
    name: 'Bloody Mary',
    price: 14.99,
  },
  {
    id: 'd18',
    section: 'Vodka',
    name: 'Cosmopolitan',
    price: 12.99,
  },
  {
    id: 'd19',
    section: 'Vodka',
    name: 'Screwdriver',
    price: 13.99,
  },
  {
    id: 'd20',
    section: 'Vodka',
    name: 'White Russian',
    price: 15.99,
  },{
    id: 'd21',
    section: 'Brandy',
    name: 'Brandy Alexander',
    price: 14.99,
  },
  {
    id: 'd22',
    section: 'Brandy',
    name: 'Sidecar',
    price: 12.99,
  },
  {
    id: 'd23',
    section: 'Brandy',
    name: 'Sazerac',
    price: 13.99,
  },
  {
    id: 'd24',
    section: 'Brandy',
    name: 'B&B',
    price: 15.99,
  }
];

const AvailableDrinks = ({section}) =>  {
  const [activeSection, setActiveSection] = useState(DUMMY_DATA[0].section);

  const filterSection = (section) => {
  const filteredData = DUMMY_DATA.filter((item) => item.section === section.name);
  return filteredData;
};

 return (
    <div>
      <SectionItem item={filterSection} onClick={() => setActiveSection(activeSection)}>
        {DUMMY_DATA.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </SectionItem>
    </div>
  );
};

export default AvailableDrinks;
