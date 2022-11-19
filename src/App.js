import './App.css';
import React, { Component, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { itemInfo } from './data';
import BasicExample from './BasicExample';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import { useState } from "react";

function App() {

  const [cart, setFavorites] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([...itemInfo]);
  const printCart = () => {
    // console.log(cart);
    }

    

// HOW TO FILTER USING MUTLIPLE FILTERS AT ONCE????

// ALSO WHY ARE BUTTONS CHANGING COLORS WHEN THEY HAVE NOT BEEN PRESSED??


// filter by genre
// const selectGenreType = (eventKey) => {
//   let newFilters = [...filters]
//   if (filters.includes(eventKey)) {
//     const i = filters.indexOf(eventKey);
//     newFilters.splice(i, 1);
//     } else {
//       newFilters.push(eventKey);
//     }
//     setFilters(newFilters);
//     console.log(filters);
//   }

//   const genreFilter = item => {
//     if (filters.includes(item.Genre)) {
//       return true
//     } else {
//       return false
//     }
//   }

//   useEffect(() => {
//     filterArr1();
//   }, [filters] )

//   const filterArr1 = () => {
//     if (filters.length == 0) {
//       setFilteredData(itemInfo)
//     } else {
//       setFilteredData(itemInfo.filter(((item) => genreFilter(item))))
//     }
//   }

  // filter by subcategory

  const selectSubcatType = (eventKey) => {
    let newFilters = [...filters]
    if (filters.includes(eventKey)) {
      const i = filters.indexOf(eventKey);
      newFilters.splice(i, 1);
      } else {
        newFilters.push(eventKey);
      }
      setFilters(newFilters);
      console.log(filters);
    }
  
    const subCatFilter = item => {
      if (filters.includes(item.Subcategory)) {
        return true
      } else {
        return false
      }
    }

    useEffect(() => {
      filterArr();
    }, [filters] )

    const filterArr = () => {
      if (filters.length == 0) {
        setFilteredData(itemInfo)
      } else {
        setFilteredData(itemInfo.filter(((item) => subCatFilter(item))))
      }
    }



  //sorting
  const handleSort = (t) => {
    if (t == "AtoZ"){
      const lowToHigh = filteredData.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });
    setFilteredData([...lowToHigh])
  } else if (t == "ZtoA") {
    const highToLow = filteredData.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      } else {
        return 1;
      }
    });
    setFilteredData([...highToLow])
  } else if (t == "reset") {
    const uidSort = filteredData.sort((a, b) => {
      if (a.uid < b.uid) {
        return -1;
      } else {
        return 1;
      }
    });
    setFilteredData([...uidSort])
  }
  }


  return (
    <div className="App">
      <h1> My Anime List </h1>
       {/* {filteredList.map((element) => (
        <BasicExample anime={element}/>
      ))} */}
      <div className='fav-total'> 
      <h2>Favorites List</h2>
      <p>{cart.map((element) => 
        <p>{element.name}</p>
      )}</p>
      </div> 
      <div className='content'> 
      <div className='filter-section'> 
        {/* <h2>Filter by: Genre </h2>
        <ToggleButtonGroup type="checkbox" defaultValue={[1, 2, 3, 4]} className="mb-2">
        <ToggleButton id="tbg-check-1" value={1} onClick={() => selectGenreType("Shonen")} >
        Shonen
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={2} onClick={() => selectGenreType("Seinen")}>
        Seinen
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={3} onClick={() => selectGenreType("Shojo")}>
        Shojo
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={4} onClick={() => selectGenreType("Josei")}>
        Josei
        </ToggleButton>
      </ToggleButtonGroup> */}
      
      <h2>Filter by:</h2>
      <h3> Subcategory</h3>
     
        <ToggleButtonGroup type="checkbox"  className="mb-2" className="toggle" >
        <ToggleButton id="tbg-check-1" value={1} onClick={() => selectSubcatType("Supernatural")} >
        Supernatural
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={2} onClick={() => selectSubcatType("Action")}>
        Action
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={3} onClick={() => selectSubcatType("Romance")}>
        Romance
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={4} onClick={() => selectSubcatType("Thriller")}>
        Thriller
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={5} onClick={() => selectSubcatType("Drama")}>
        Drama
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={6} onClick={() => selectSubcatType("Comedy")}>
        Comedy
        </ToggleButton>
      </ToggleButtonGroup>
 

      <h2>Sorting</h2>
      <ToggleButtonGroup type="checkbox" defaultValue={[1, 2]} className="toggle">
        <ToggleButton id="tbg-check-1" value={1} onClick={() => handleSort("AtoZ")} >
          Alphabet A to Z
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={2} onClick={() => handleSort("ZtoA")}>
        Alphabet Z to A
        </ToggleButton>
        <ToggleButton id="tbg-check-3" value={3} onClick={() => handleSort("reset")}>
        Reset
        </ToggleButton>
      </ToggleButtonGroup>
        </div>
      
      
      <div className="container">
      {filteredData.map((element) => ( 
        <BasicExample anime={element} cart={cart} setFavorites={setFavorites}/>
      ))}
      </div> 
      </div>
    
    </div>
  );
}



export default App;