interface PostInterface {
  userid:number
  id:number
  title:string
  body:string

}


import Link from 'next/link'
import React, { Fragment } from 'react'


async function Fetch_get() {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{next:{revalidate:5},})
  let data : PostInterface[]= await response.json()
  

  

  return (<Fragment>
    <div className="w-[100%] bg-black text-white text-center text-[30px] ">Fetch_get</div>


    <div className="w-[100%] bg-green-800 text-white text-center text-[15px] my-1 py-3">

      {data.map((item)=>(
       <Link href={`/fetch_get/${item.id}`}><li style={{direction:'ltr'}} className="ltl" key={item.id}> {item.id} - {item.title}</li></Link> 
        
      ))}
          </div>
    </Fragment>
    
  )
}


export default Fetch_get