import Link from "next/link";
import { Fragment } from "react";

export interface PostId {
  uuid:number
  id: number;
  title:string
  body:string
  
}

async function PostId( {params} : {params : {id:string} } ){
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/`, { cache: 'no-cache' });
  const data: PostId = await response.json();

  return (
    <Fragment>
    <div className="w-[100%] bg-black text-white text-center text-[30px] ">Fetch_get Detail</div>


    <div className="w-[100%] bg-yellow-500 text-white text-center text-[15px] my-1 py-3">

        <li style={{direction:'ltr'}} className="ltl" key={data.id}> {data.id} - {data.title}</li>
    
          </div>
    </Fragment>
  );
}

export default PostId;