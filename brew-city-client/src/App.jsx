import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './components/CoffeeCard';

function App() {
  const [count, setCount] = useState(0);

  const coffees = useLoaderData();

  return (
    <>
      <h1 className='text-6xl text-lime-700'>COFFEE {coffees.length}</h1>
      {
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}/>)
      }
    </>
  );
}

export default App
