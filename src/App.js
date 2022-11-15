import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { itemInfo } from './data';
import BasicExample from './BasicExample';
import { useState } from "react";

function App() {

  const [cart, setFavorites] = useState([]);
  // const [cartTotal, setTotal] = useState(0);


  // const colorButton = (anime) => {
  //   for (let i=0; i < anime.length; i++ {
  //     if 
  //   })
  // }



  return (
    <div className="App">
      <h1>My Anime List</h1>
      <div className="container">
      {itemInfo.map((element, index) => ( 
        <BasicExample anime={element} cart={cart} setFavorites={setFavorites}/>
      
      ))}
      </div>  
    </div>
  );
}



export default App;

