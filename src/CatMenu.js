import React from 'react'

const CatMenu = ({filterItem,categItem}) => {
    return (
        <div>
            <header>
            <h1>Order Your Favourite Dish</h1>
            <div className="amn" >
            {categItem.map((currElm, index)=>{
                return <button className="btn" key={index} onClick={()=>(filterItem(currElm))}>{currElm}</button>
                     
            })}
            </div>

        </header>
        </div>
    )
}
// <button className="btn" onClick={()=>setItems(Menu)}>All</button>

export default CatMenu
