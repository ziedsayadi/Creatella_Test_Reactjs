import Product from "../Product/Product"
import { ProductContext } from "../../utils/productHooks"
import Spinner from "../Spinner/Spinner"
import { useContext } from "react"
function AllProducts() {
    const {loading,faces,pageNumber,hasMore ,error, setPageNumber,PRODUCT_PER_PAGE} = useContext(ProductContext)

    // befor we hit the last the end of our table , we have to determine the last element {last page}
    let lastPage 
    if(faces.length%PRODUCT_PER_PAGE ===0){
        lastPage = Math.floor(faces.length/PRODUCT_PER_PAGE) + 1
    } else lastPage = Math.floor(faces.length/PRODUCT_PER_PAGE) + 2
    // console.log(`**************${lastPage}**********************`)
    return (
        <>
        <div className="row d-flex mb-3 mt-4 containner">
                <Product faces={faces} 
                pageNumber={pageNumber} 
                loading={loading} 
                hasMore={hasMore} 
                setPageNumber={setPageNumber} /> 
        </div>
        <div>{loading  && <Spinner/>}</div>
        <div>{lastPage && !loading && <h2 className="end_of_cata mt-4 mb-4 text-center text-capitalize"> end of catalogue </h2>}</div>
        <div>{error && <h2 className="text-center text-danger" >Error...</h2>}</div>
        </>
    )
}

export default AllProducts
