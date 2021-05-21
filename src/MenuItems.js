import React from 'react'

const MenuItems = (props) => {
    return (
        <div>
        <div className="main">
        
        {
          props.items.map((elem)=>{
              const {id,name,image,description,price}=elem;
              return(
                 
                    <div className="card" key={id}>
                      <img src={image} alt="" />
                      <div className="text">
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <div className="order">
                          <h3> Price:<span>{price}</span> </h3>
                          <button className="btnn">Order</button>
                        </div>
                      </div>
                    </div>
                  
              )
          })
      }
        </div>
        </div>
    )
}

export default MenuItems
