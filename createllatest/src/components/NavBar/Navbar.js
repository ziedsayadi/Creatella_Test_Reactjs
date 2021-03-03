import React from 'react'
import Sorting from '../SortProducts/sorting'


function Navbar() {

    return (
        <div className="d-flex justify-content-between mt-4 mb-2">
            
                <h3 className="title col-md-6">Products Grid</h3>
                <Sorting />
        </div>
    )
}

export default Navbar
