import { useRef , useCallback, Fragment} from "react"
import Ads from "../Ads/Ads"

function Product({faces,loading,hasMore,setPageNumber}) {


    // use the refHook to reference the last element in the data table
    const observer = useRef()
    // we useCallbackhook to track last element whenever the data changes 
    // so that the ref change to the new last element in every render   
    const lastElementRef = useCallback(node =>{
        // we dont want to fetch anydata and trigger infinit scrolling if we are loading
        if(loading) return
        // if we have ref to an elemenet we disconnect ref from that elem to reconnect it to the new last elem
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries=>{
            if(entries[0].isIntersecting && hasMore){
                setPageNumber(prevPage=> prevPage + 1)
            }
        })
        if(node) observer.current.observe(node)
    },[loading,hasMore])

    // Calculate the current date based on the difference between the current date and the date in the table
    const CalculateDate =(date)=>{
        let days = ""
        const today = new Date()
        const difference = Math.floor((today-new Date(date))/(24*3600*1000))

        // console.log(difference)
        if(difference === 0){
            days = "Today"
        } else if (difference == 1){
            days = `${difference} day ago`
        } else if (difference > 1 && difference <8){
            days = `${difference } days ago`
        } else {
            days = date.split(' ').slice(1,4).join('/')
        }
        return days 
    }

    return (
        <Fragment>
            
        {
            faces.map(({id,size,price,date,face},index)=>{
                {
                        
                               {
                                if (faces.length === index + 1){

                                    // run Ad after every 20 Product
                                    return (<Fragment key={index}>
                                    {
                                        index%20 ===0 && index!=0 && <Ads/>
                                    }
                                     <div className="cards" ref={lastElementRef}>
                                     <div className="card__face">
                                     <h2 className="face">{face}</h2>
                                     </div>
                                     <p className="card__date">Posted: <span className="span_date"> {CalculateDate(date)}</span></p>
                                     <div className="grid-container">
                                    <div className="grid-child-ids">ID: 
                                    <span className="span_id">{id}</span>
                                    </div>
                                    <div className="grid-child-sizes">
                                    Size: <span className="span_size">{size}px</span> 
                                    </div>
                                    </div>
                                    <button className="btn draw-border">${price}</button>
                                    </div>
                                </Fragment>)
                                } else {
                                    // run Ad after every 20 Product
                                    return (<Fragment key={index}>
                                    {
                                        index%20 ===0 && index!=0 && <Ads/>
                                    }
                                    <div className="cards">
                                     <div className="card__face">
                                     <h2 className="face">{face}</h2>
                                     </div>
                                     <p className="card__date">Posted:
                                      <span className="span_date"> {CalculateDate(date)}</span></p>
                                     <div className="grid-container">
                                    <div className="grid-child-ids">ID: 
                                    <span className="span_id">{id}</span>
                                    </div>
                                    <div className="grid-child-sizes">
                                    Size: <span className="span_size">{size}px</span> 
                                    </div>
                                    </div>
                                    <button className="btn draw-border">${price}</button>
                                    </div>
                                </Fragment>)
                                }
                            }

                    
                }
                
            })
        }
       
        </Fragment>
    )
}

export default Product


