import React from 'react' ;
import './App.css';
import Navbar from './Components/Navbar/navi' ;
import Filter from './Components/Filter/filter' ;
import Add from './Components/Add/add' ;
import MovieList from './Components/Movies/movielist' ;
import {Movies} from './Components/Movies/movies'
import Footer from './Components/Footer/footer' ;
import {useState} from 'react' ;
import {Switch, Route} from 'react-router-dom' ;
import Details from './Components/Movies/details' ;

function App() {

  const [ Films , setFilms] = useState (Movies) ;
  const addHandler = (newFilm) => {
  setFilms (
    [...Films , newFilm]
  )

  }
// get the data from the user by typing
const [search,setSearch] = useState ("")


// get the data from the user by rating
const [rating,setrating] = useState(1)



  return (
    <div className="App">
      
      <Navbar />
      <br/>
      <Filter setSearch={setSearch} rating ={rating} setrating={setrating}  />
      <br/>
      <Add addHandler={addHandler} />
      <br/>
      <Switch>
      <Route exact path="/"> <MovieList Film = {Films} search={search}  rating ={rating}/></Route>
      <Route path="/details/:id" render = {(props)=>  <Details {...props} list={Movies}/>}></Route>
      </Switch>
      <br/>
      <Footer/>

      
    </div>
  );
}

export default App;