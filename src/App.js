import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { itemInfo } from './data';
import BasicExample from './BasicExample';
import { useState } from "react";

function App() {

  const [cart, setFavorites] = useState([]);
  // const [cartTotal, setTotal] = useState(0);

  function addtoFavorites(anime) {
    console.log(cart.length)

    var count = 0;
    for (let i=0; i<cart.length; i++) {  
      if (cart[i].name != anime.name) {
        
        count++
        console.log("count incremented")
        console.log(count)
      }
    }
    if (count == cart.length) {
      setFavorites([...cart, anime]);
    }
    console.log("addtoFavorites");
    console.log("cart", cart);
    
    // return{}
  }

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
        <BasicExample anime={element} addtoFavorites={() => addtoFavorites(element)}/>
      
      ))}
      </div>  
    </div>
  );
}



export default App;

