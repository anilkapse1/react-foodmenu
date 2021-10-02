import react from "react";

import { Card} from "react-bootstrap";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

// import './CardList.scss'

 

const CardList=(props)=>{

    return(

        <react.Fragment>

            <Card style={{ width: '18rem' }} className="m-2">

                <Card.Img variant="top" src={props.imagePath} />

                <Typography variant="caption" display="block" gutterBottom className="captionText">

                        {props.categoryName}

                </Typography>

                <Card.Body className="d-flex flex-column flex-wrap flex-justify justify-content-between justify-content-between">

                    <Card.Title className="text-uppercase">{props.itemName}</Card.Title>

                    <Card.Text>

                        {props.description}

                    </Card.Text>

                    <Button variant="contained" size="medium">

                        Order: {props.price}

                    </Button>

                </Card.Body>

            </Card>

        

        </react.Fragment>

    )

}

 

export default CardList;