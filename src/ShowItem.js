import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState , useEffect} from "react";

// separate component for card

function ShowItem({anime, cart, setFavorites, addCart, removeCart}) {

  const [buttonText, setButtonText] = useState("Add to Favorites");
  
  useEffect(() => {
    if(cart.includes(anime)) setButtonText("Remove from Favorites");
  },[]);
        

    function addtoFavorites(anime) {
        console.log(cart.length) 
        if (!cart.includes(anime)) {
            setFavorites([...cart, anime]);
            addCart(anime)
            setButtonText("Remove from Favorites")
            
        } else {
            const remove = cart.indexOf(anime)
            if (remove > -1) {
                setFavorites([...cart.slice(0,remove), ...cart.slice(remove+1)])
                removeCart(anime)
                setButtonText("Add to Favorites")
            }
        }
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
          <Card.Text >
          <b> Subcategory:</b> {anime.Subcategory}
          </Card.Text>
         <Card.Text>
         <b> Seasons:</b> {anime.Seasons} 
         </Card.Text>
          <Button variant="danger" size="sm"
            // onClick={() => addtoFavorites(anime)} 
            // onClick={() => updateCart(anime)}

            onClick={event => {
              addtoFavorites(anime);
              // addCart(anime);
            }}
            >
            
            <span className="button-label">
            
            <svg className="button-heart" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
            {buttonText}
            </span>
          </Button>


        </Card.Body>
      </Card>
    );
  }

  export default ShowItem;