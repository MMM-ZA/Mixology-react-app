import React from "react";
import DrinkItem from "./DrinkItem";
import classes from './ActiveDrinks.module.css';


const DUMMY_DRINKS = [
  {
    id: 'd1',
    sectionId: 's1',
    name: 'Gin and Tonic',
    price: 16.99,
  },
  {
    id: 'd2',
    sectionId: 's1',
    name: 'Negroni',
    price: 18.99,
  },
  {
    id: 'd3',
    sectionId: 's1',
    name: 'Tom Collins',
    price: 17.99,
  },
  {
    id: 'd4',
    sectionId: 's1',
    name: 'Martini',
    price: 19.99,
  },
  {
    id: 'd5',
    sectionId: 's2',
    name: 'Old Fashioned',
    price: 18.99,
  },
  {
    id: 'd6',
    sectionId: 's2',
    name: 'Manhattan',
    price: 19.99,
  },
  {
    id: 'd7',
    sectionId: 's2',
    name: 'Whiskey Sour',
    price: 17.99,
  },
  {
    id: 'd8',
    sectionId: 's2',
    name: 'Irish Coffee',
    price: 15.99,
  },
  {
    id: 'd9',
    sectionId: 's3',
    name: 'Margarita',
    price: 14.99,
  },
  {
    id: 'd10',
    sectionId: 's3',
    name: 'Tequila Sunrise',
    price: 12.99,
  },
  {
    id: 'd11',
    sectionId: 's3',
    name: 'Paloma',
    price: 13.99,
  },
  {
    id: 'd12',
    sectionId: 's3',
    name: 'Mexican Mule',
    price: 15.99,
  },
  {
    id: 'd13',
    sectionId: 's4',
    name: 'Daiquiri',
    price: 14.99,
  },
  {
    id: 'd14',
    sectionId: 's4',
    name: 'Mojito',
    price: 12.99,
  },
  {
    id: 'd15',
    sectionId: 's4',
    name: 'Piña Colada',
    price: 13.99,
  },
  {
    id: 'd16',
    sectionId: 's4',
    name: 'Dark and Stormy',
    price: 15.99,
  },
  {
    id: 'd17',
    sectionId: 's5',
    name: 'Bloody Mary',
    price: 14.99,
  },
  {
    id: 'd18',
    sectionId: 's5',
    name: 'Cosmopolitan',
    price: 12.99,
  },
  {
    id: 'd19',
    sectionId: 's5',
    name: 'Screwdriver',
    price: 13.99,
  },
  {
    id: 'd20',
    sectionId: 's5',
    name: 'White Russian',
    price: 15.99,
  },
  {
    id: 'd21',
    sectionId: 's6',
    name: 'Brandy Alexander',
    price: 14.99,
  },
  {
    id: 'd22',
    sectionId: 's6',
    name: 'Sidecar',
    price: 12.99,
  },
  {
    id: 'd23',
    sectionId: 's6',
    name: 'Sazerac',
    price: 13.99,
  },
  {
    id: 'd24',
    sectionId: 's6',
    name: 'B&B',
    price: 15.99,
  }
];

const ActiveDrinks = (props) => {

  const drinkList = DUMMY_DRINKS.filter((drink) => drink.sectionId === props.sectionId).map((drink) => <DrinkItem
    key={drink.id}
    id={drink.id}
    sectionId={drink.sectionId}
    name= {drink.name}
    price= {drink.price}
  />);


  return (
    <div className={classes.wrapper}>
    <ul className={classes.menu}>{drinkList}</ul>
    </div>
  )
};

export default ActiveDrinks;
