
import React from 'react' ;
import Rating from './Rate' ;
import {Card,Button} from 'react-bootstrap' ;
import {Link} from 'react-router-dom' ;
function cards({Aflem}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Aflem.image}/>
  <Card.Body>
    <Card.Title>{Aflem.name}</Card.Title>
    <Link to= {`/details/${Aflem.id}`}  ><Button>Details</Button></Link>           
    
  </Card.Body>
</Card>
        </div>
    )
}
export default cards