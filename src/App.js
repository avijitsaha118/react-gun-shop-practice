
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Component/Card/Card';
import Navbar from './Component/Navbar/Navbar';

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(guns);

  const handleAddToCart=(gun)=>{
    const newCart = [...cart, gun];
    setCart(newCart);
};

  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
    .then(res=>res.json())
    .then(data=> setGuns(data));
  },[])

  return (
    <div>
  <Navbar></Navbar>
  <div>
    {
      cart.map((item)=>(
        <h1 key={item.id}>{item.name}</h1>
      ))
    }
  </div>
<div className='card-container'>
{
    guns.map(gun => (
      <Card key={gun.id} gun={gun} handleAddToCart={handleAddToCart}/>
    ))};
</div>

  {/* <Card></Card> */}

    </div>
  );
}

export default App;
