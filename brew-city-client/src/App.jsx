import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './components/CoffeeCard';

function App() {
  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <h1 className='text-6xl text-lime-700'>COFFEE {coffees.length}</h1>
      {
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}/>)
      }
    </>
  );
}

export default App
