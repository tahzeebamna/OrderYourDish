import React, { useState } from 'react'
import './App.css';
import CatMenu from './CatMenu';
import Menu from './Menu'
import MenuItems from './MenuItems'
const allCatVal = [...new Set(Menu.map((currElm)=>currElm.category)) , "all"]

const OderMenu = () => {
  
  const [items, setItems] = useState(Menu)
  const [categItem, setCategItem]= useState(allCatVal)

  const filterItem=(categoryItem)=>{

    if(categoryItem==="all"){
       setCategItem(Menu)
      return;
    }
    else{
      const updatedItem=Menu.filter((currElm)=>{
      return( currElm.category===categoryItem);
    })
    setItems(updatedItem)

  }
}


    return (
        <div className="App" >
        <CatMenu filterItem={filterItem}  categItem={categItem}/>
        <MenuItems items={items}/>
  
        </div>
        
        
    );
  }


export default OderMenu
