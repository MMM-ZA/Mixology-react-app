import { useState } from "react";

const DUMMY_DATA = [
  {
    id:'d1',
    section:'gin',
    name: 'gin and tonic',
    price: 16.99,

  },
  {
    id: 'd2',
    section: 'gin',
    name: 'Negroni',
    price: 18.99,
  },
  {
    id: 'd3',
    section: 'gin',
    name: 'Tom Collins',
    price: 17.99,
  },
  {
    id: 'd4',
    section: 'gin',
    name: 'Martini',
    price: 19.99,
  },
   {
    id: 'd5',
    section: 'whiskey',
    name: 'Old Fashioned',
    price: 18.99,
  },
  {
    id: 'd6',
    section: 'whiskey',
    name: 'Manhattan',
    price: 19.99,
  },
  {
    id: 'd7',
    section: 'whiskey',
    name: 'Whiskey Sour',
    price: 17.99,
  },
  {
    id: 'd8',
    section: 'whiskey',
    name: 'Irish Coffee',
    price: 15.99,
  },
  {
    id: 'd9',
    section: 'tequila',
    name: 'Margarita',
    price: 14.99,
  },
  {
    id: 'd10',
    section: 'tequila',
    name: 'Tequila Sunrise',
    price: 12.99,
  },
  {
    id: 'd11',
    section: 'tequila',
    name: 'Paloma',
    price: 13.99,
  },
  {
    id: 'd12',
    section: 'tequila',
    name: 'Mexican Mule',
    price: 15.99,
  },
   {
    id: 'd13',
    section: 'rum',
    name: 'Daiquiri',
    price: 14.99,
  },
  {
    id: 'd14',
    section: 'rum',
    name: 'Mojito',
    price: 12.99,
  },
  {
    id: 'd15',
    section: 'rum',
    name: 'Piña Colada',
    price: 13.99,
  },
  {
    id: 'd16',
    section: 'rum',
    name: 'Dark and Stormy',
    price: 15.99,
  },
  {
    id: 'd17',
    section: 'vodka',
    name: 'Bloody Mary',
    price: 14.99,
  },
  {
    id: 'd18',
    section: 'vodka',
    name: 'Cosmopolitan',
    price: 12.99,
  },
  {
    id: 'd19',
    section: 'vodka',
    name: 'Screwdriver',
    price: 13.99,
  },
  {
    id: 'd20',
    section: 'vodka',
    name: 'White Russian',
    price: 15.99,
  },{
    id: 'd21',
    section: 'brandy',
    name: 'Brandy Alexander',
    price: 14.99,
  },
  {
    id: 'd22',
    section: 'brandy',
    name: 'Sidecar',
    price: 12.99,
  },
  {
    id: 'd23',
    section: 'brandy',
    name: 'Sazerac',
    price: 13.99,
  },
  {
    id: 'd24',
    section: 'brandy',
    name: 'B&B',
    price: 15.99,
  }
];

// Separate data structure for sections
const SECTIONS_DATA = [  { id: 'gin', name: 'Gin' },  { id: 'whiskey', name: 'Whiskey' },  { id: 'tequila', name: 'Tequila' },  { id: 'rum', name: 'Rum' },  { id: 'vodka', name: 'Vodka' },  { id: 'brandy', name: 'Brandy' }];


const AvailableDrinks = () =>  {
  const [currentSectionId, setCurrentSectionId] = useState(SECTIONS_DATA[0].id);

  // Filter menu items by section
  const filteredMenuItems = DUMMY_DATA.filter(
    item => item.section === currentSectionId
  );

  return (
    <div>

      {SECTIONS_DATA.map(section => (
        <button key={section.id} onClick={() => setCurrentSectionId(section.id)}>
          {section.name}
        </button>
      ))}


      {filteredMenuItems.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default AvailableDrinks;
