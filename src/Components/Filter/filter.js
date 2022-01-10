import React from 'react'
import Rating from '../Movies/Rate' ;
import './filter.css';
import {InputGroup,FormControl} from 'react-bootstrap' ;

function Filter({setSearch, setrating, rating}) {


    return (
        <div className="SearchBar">
            <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"> <i class="fas fa-search"></i>  </InputGroup.Text>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={ (e)=> setSearch ((e.target.value))}
    />
  </InputGroup>

<Rating Rating={rating} setrating={setrating}/>

        </div>
    )
}

export default Filter ;