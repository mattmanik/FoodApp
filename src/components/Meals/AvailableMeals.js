import './AvailableMeals.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem.js';

const dummyMEALS = [
    {
      id: 'm1',
      name: 'Idly',
      description: 'Finely steamed and hot..',
      price: 40.50,
    },
    {
      id: 'm2',
      name: 'Dosa',
      description: 'More crisper and larger..',
      price: 50.75,
    },
    {
      id: 'm3',
      name: 'Pongal',
      description: 'With delicious South Indian spices..',
      price: 70.00,
    },
    {
      id: 'm4',
      name: 'Puri',
      description: 'Made with fine refined oil..',
      price: 50.00,
    },
  ];
  

const AvailableMeals = () => {

    const dummyList = dummyMEALS.map( (meal) => 
     (<MealItem
      key={meal.id} 
      id={meal.id}
      name={meal.name}
      description = {meal.description}
      price = {meal.price}
       />));

    return (<section className='meals'>
        <Card>
            <ul>{dummyList}</ul>
        </Card>
    </section>);
};

export default AvailableMeals;