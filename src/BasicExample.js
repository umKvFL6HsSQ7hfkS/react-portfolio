import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from "react";

function BasicExample({anime, cart, setFavorites}) {
    
    
//     const [active, setActive] = useState(false);
//     const handleClick = () => {
//     setActive(!active);
//   };


    function addtoFavorites(anime) {
        console.log(cart.length)

        var count = 0;
        for (let i=0; i<cart.length; i++) {  
        if (cart[i].name != anime.name) {
            
            count = count + 1
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

    return (
        
  
      <Card className="example" >
        <Card.Img className="anime-img" variant="top" src={anime.image} />
        <Card.Body className="anime-info">
          <Card.Title className="anime-title">{anime.name}</Card.Title>
          <Card.Text className='anime-description'>
            {anime.description}
          </Card.Text>
          <Card.Text >
          <b>Currently airing:</b> {anime.currently_airing} 
          </Card.Text>
          <Card.Text >
          <b> Genres:</b> {anime.Genre}
          </Card.Text>
         <Card.Text>
         <b> Seasons:</b> {anime.Seasons} 
         </Card.Text>
          <Button variant="danger" size="sm"
            onClick={() => addtoFavorites(anime)
            }>
            <span className="button-label">
            
            <svg className="button-heart" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            Add to favorites
            </span>
          </Button>


        </Card.Body>
      </Card>
    );
  }

  export default BasicExample;