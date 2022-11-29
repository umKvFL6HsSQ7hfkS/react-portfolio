import "./App.css";
import React, { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { itemInfo } from "./data";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Aggregator from "./Aggregator";
import { useState } from "react";
import ShowItem from "./ShowItem";

function App() {
  const [cart, setFavorites] = useState([]);
  const [subcat, setSubcat] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filteredData, setFilteredData] = useState([...itemInfo]);
  const [seasonCart, setCart] = useState([]);
  const [favSeasonTotal, setTotal] = useState(0);

  // aggregate total number of seasons in favorites
  const addToCart = (item) => {
    setCart([...seasonCart, item.Seasons]);
    setTotal(item.Seasons + favSeasonTotal);
  };

  const removeFromCart = (item) => {
    setCart([...seasonCart, item.Seasons]);
    setTotal(favSeasonTotal - item.Seasons);
  };


  // filter by subcategory
  const selectSubcatType = (eventKey) => {
    let newSubcat = [...subcat];
    if (subcat.includes(eventKey)) {
      const i = subcat.indexOf(eventKey);
      newSubcat.splice(i, 1);
    } else {
      newSubcat.push(eventKey);
    }
    setSubcat(newSubcat);
    console.log(subcat);
  };

  const subCatFilter = (item) => {
    if (subcat.includes(item.Subcategory) || subcat.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  // filter by genre type
  const selectGenreType = (eventKey) => {
    let newGenres = [...genres];
    if (genres.includes(eventKey)) {
      const i = genres.indexOf(eventKey);
      newGenres.splice(i, 1);
    } else {
      newGenres.push(eventKey);
    }
    setGenres(newGenres);
    console.log(genres);
  };

  const genreFilter = (item) => {
    if (genres.includes(item.Genre) || genres.length == 0) {
      return true;
    } else {
      return false;
    }
  };
 
  const filterAll = (element) => {
    return subCatFilter(element) && genreFilter(element);
  };

  const handleSort = (t) => {
    let output = [...filteredData]
    
    if (t == "AtoZ") {
      // const lowToHigh = 
      output.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else {
          return 1;
        }
      });
      console.log(output)
      setFilteredData(output);
    } else if (t == "ZtoA") {
      output.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        } else {
          return 1;
        }
      });
      setFilteredData(output);
    } else if (t == "reset") {
      output.sort((a, b) => {
        if (a.uid < b.uid) {
          return -1;
        } else {
          return 1;
        }
      });
      setFilteredData(output);
    }
  };

  const filteredList = filteredData.filter((element) => filterAll(element))
  console.log(filteredList)

  return (
    <div className="App">
      <h1> My Anime List </h1>

      <div className="content">
        <div className="filter-section">
          <h2>Filter by: </h2>
          <h3> Genre</h3>
          <ToggleButtonGroup
            type="checkbox"
            defaultValue={[1, 2, 3, 4]}
            className="mb-2"
          >
            <ToggleButton
              id="tbg-check-1"
              value={1}
              onClick={() => selectGenreType("Shonen")}
            >
              Shonen
            </ToggleButton>
            <ToggleButton
              id="tbg-check-2"
              value={2}
              onClick={() => selectGenreType("Seinen")}
            >
              Seinen
            </ToggleButton>
            <ToggleButton
              id="tbg-check-3"
              value={3}
              onClick={() => selectGenreType("Shojo")}
            >
              Shojo
            </ToggleButton>
            <ToggleButton
              id="tbg-check-4"
              value={4}
              onClick={() => selectGenreType("Josei")}
            >
              Josei
            </ToggleButton>
          </ToggleButtonGroup>

          <h3> Subcategory</h3>

          <ToggleButtonGroup
            type="checkbox"
            defaultValue={[5, 6, 7, 8, 9, 10]}
            className="mb-2"
            className="toggle"
          >
            <ToggleButton
              id="tbg-check-5"
              value={5}
              onClick={() => selectSubcatType("Supernatural")}
            >
              Supernatural
            </ToggleButton>
            <ToggleButton
              id="tbg-check-6"
              value={6}
              onClick={() => selectSubcatType("Action")}
            >
              Action
            </ToggleButton>
            <ToggleButton
              id="tbg-check-7"
              value={7}
              onClick={() => selectSubcatType("Romance")}
            >
              Romance
            </ToggleButton>
            <ToggleButton
              id="tbg-check-8"
              value={8}
              onClick={() => selectSubcatType("Thriller")}
            >
              Thriller
            </ToggleButton>
            <ToggleButton
              id="tbg-check-9"
              value={9}
              onClick={() => selectSubcatType("Drama")}
            >
              Drama
            </ToggleButton>
            <ToggleButton
              id="tbg-check-10"
              value={10}
              onClick={() => selectSubcatType("Comedy")}
            >
              Comedy
            </ToggleButton>
          </ToggleButtonGroup>

          <h2>Sorting</h2>
          <ToggleButtonGroup
            type="checkbox"
            defaultValue={[11, 12, 13]}
            className="toggle"
          >
            <ToggleButton
              id="tbg-check-1"
              value={11}
              onClick={() => handleSort("AtoZ")}
            >
              Alphabet A to Z
            </ToggleButton>
            <ToggleButton
              id="tbg-check-2"
              value={12}
              onClick={() => handleSort("ZtoA")}
            >
              Alphabet Z to A
            </ToggleButton>
            <ToggleButton
              id="tbg-check-3"
              value={13}
              onClick={() => handleSort("reset")}
            >
              Reset
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div className="container">
          {filteredList.map((element) => 
              <ShowItem
                anime={element}
                cart={cart}
                setFavorites={setFavorites}
                addCart={addToCart}
                removeCart={removeFromCart}
                key={element.uid}
              />
          )}
        </div>
      </div>
      <div className="fav-total">
        <h2>Favorites List</h2>
        <p>
          {cart.map((element) => (
            <p>{element.name}</p>
          ))}
        </p>
        <Aggregator total={favSeasonTotal}/>
      </div>
    </div>
  );
}

export default App;
