import react, { useState } from "react";

import Menu from "./Data";

import CardList from "./CardList";



import Button from '@mui/material/Button';

import ButtonGroup from '@mui/material/ButtonGroup';

import Typography from '@mui/material/Typography';

 

const ListPage=()=>{

    const [data, setData] = useState(Menu);

    const allCat = [...new Set(Menu.map((val)=>val.category)),"all"];

 

    const filterCategory=(e)=>{

        if(e==="all"){

            setData(Menu);

            return;

        }

       const updateData = Menu.filter((value,index)=>{

           return value.category===e;

       })

       setData(updateData)

    }

 

    return(

        <react.Fragment>

 

           

 

            <Typography variant="h4" gutterBottom component="div" className="mt-5">

               Star Hotel

            </Typography>

 

            <ButtonGroup variant="outlined" aria-label="outlined button group"  className="mb-4">

            {

                allCat.map((val,index)=>{

                    

                    return(

                        <Button onClick={()=>filterCategory(val)}>{val}</Button>

                    )

                })

            }

            </ButtonGroup>                

 

            <div className="d-flex flex-row flex-wrap">

            {

                data.map((value,index)=>{

                    const {id,img,item,price,category,description} = value;

                    return (

                        <CardList

                            key={id}

                            imagePath = {img}

                            itemName = {item}

                            price = {price}

                            categoryName = {category}

                            description = {description}

                        />

                    )

                })                

            }

            </div>

 

        </react.Fragment>

    )

}
export default ListPage;