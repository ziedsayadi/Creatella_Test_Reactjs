import React,{useEffect,useState} from 'react'
import axios from "axios" ;



 const ProductContext = React.createContext();
 const ContextProvider =({children})=>{
    const [sorting,setSorting] = useState('none');
    const [faces, setFaces] = useState([])
    const [loading, setLoading] = useState(false) ;
    const [hasMore, setHasMore] = useState(false) ;
    const [pageNumber, setPageNumber] = useState(1) ;
    const [error, setError] = useState(false) ;
 

   console.log(sorting)


    const baseUrl = `http://localhost:3000/api/products`
    const PRODUCT_PER_PAGE = 15

    // fetching all products using idle-time

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method:'GET',
            url:`${baseUrl}?_page=${pageNumber}&_limit=${PRODUCT_PER_PAGE}`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
        .then(({data})=>{
            setFaces([...faces,...data])
            setHasMore(data.length>0)
            setLoading(false)
        })
        .catch(err=>{
            if (axios.isCancel(err)) return
            setError(true)})
        return () => cancel()
    }, [pageNumber])


    // fetch data after sorting
     useEffect(()=>{
        
        let newUrl = `?_page=1&_limit=${PRODUCT_PER_PAGE}`;
        if (sorting !== "None") {
           newUrl += `&_sort=${sorting}`;
        }
        
        const query = sessionStorage.getItem(newUrl)
        
        if(!query){
         setLoading(true)
         setError(false)
         axios.get(baseUrl+newUrl)
        .then(({data})=>{
            console.log(data)
            setFaces([...faces,...data])
            sessionStorage.setItem(newUrl, JSON.stringify(data));
            setHasMore(data.length>0)
            setLoading(false)
        })
        .catch((e)=>{
            console.log(e)
            setError(true)
        })
        }else {
            setFaces(JSON.parse(query));
            
        }
        
    },[sorting])

    return (
        <ProductContext.Provider value={{loading ,
                    faces , 
                    hasMore ,
                    error , 
                    pageNumber ,
                    setPageNumber , 
                    setLoading,
                    setError , 
                    PRODUCT_PER_PAGE,
                    sorting,
                    setSorting
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContext,ContextProvider}
    

    


 
