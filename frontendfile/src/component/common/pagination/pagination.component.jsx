import { Pagination } from "react-bootstrap"

const PaginationComponent=({pagination,fetchFunct})=>{
return(
    <>
    
    {
            pagination ? 
            <Pagination className="float-end" size="sm">
              {
          +pagination.currentPage === 1?<></>:<>
          
          <Pagination.First onClick={(e)=>{
              e.preventDefault()
              fetchFunct({page:1})
            }}/>
            <Pagination.Prev onClick={(e)=>{
              e.preventDefault()
              fetchFunct({page:(+pagination.currentPage-1)})
            }}/> 
          
          </>

              }
             {
               [...Array(pagination.pages)].map((count,index)=>(
               <Pagination.Item 
               key= {index}
                active={+pagination.currentPage===(index+1)}
               onClick={(e)=>{
                e.preventDefault()
                fetchFunct({page:index+1})

               }}
               
               >
                {index+1}
               </Pagination.Item>

               ))

                

             }
            
            {
              pagination.pages > +pagination.currentPage?<>
               <Pagination.Next onClick={(e)=>{
              e.preventDefault()
              fetchFunct({page:(+pagination.currentPage+1)})
            }}/>
            <Pagination.Last onClick={(e)=>{
              e.preventDefault()
              fetchFunct({page:pagination.pages})
            }}/> 
              
              </>:<></>
            }
           
            {/* <Pagination.Next/>
            <Pagination.Last/> */}

          </Pagination>:<></>
           }
    
    
    
    </>
)
}
    



export default PaginationComponent