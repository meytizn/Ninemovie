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
  






  function add_do(e:any) {
    e.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(e.target);
    const title = formData.get('title');
    const body = formData.get('body');
    const newdo = { title: title, body: body };

    fetch('https://jsonplaceholder.typicode.com/posts/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newdo)
    })
    .then(response => {
      if (response.ok) {
        console.log(response);
        Setmessage('message sent successfully')
        
        
      }
    })
    .catch(error => {
      console.error('Error:', error);
      Setmessage('message fild :(')
    });
  }





  

  return (<Fragment>
    <div className="w-[100%] bg-red-600 text-white text-center text-[30px] justify-center items-center ">Fetch_update</div>


    <div style={{direction:'ltr',textAlign:'center'}} className="w-[100%] bg-green-800 text-white text-center text-[15px] my-1 py-3">

      {data.map((item)=>(
       <Link   className='flex flex-row' href={`/fetch_get/${item.id}`}><li style={{direction:'ltr'}} className="ltl" key={item.id}> {item.id} - {item.title}</li>
       
       <Link className=" bg-red-600 text-black text-center" href={`/fetch_update/${item.id}`}>put</Link>
       {/* <Link className=" bg-red-600 text-black text-center" href={`/fetch_delete/${item.id}`}>parchal update </Link> */}
       </Link> 
        
      ))}
          </div>
    </Fragment>
    
  )
}


export default Fetch_get