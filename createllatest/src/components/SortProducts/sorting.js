import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../utils/productHooks'


import './sorting.css'


function Sorting() {



 const {sorting,setSorting} = useContext(ProductContext)



console.log(sorting)

    const feilds = ["none","size","id","price"]


    return (
        
        <div className="select_container d-flex justify-content-between mr-4">
            <h4 className="mr-3 mt-1">Sorte</h4>
            <select className="select" value={sorting} onChange={(e)=>setSorting(e.target.value)} >
                       {
                           feilds.map(feild=>{
                               return <option value={feild} >{feild}</option>
                           })
                       }
            </select>
        </div>
        
       
    )
}


export default Sorting
