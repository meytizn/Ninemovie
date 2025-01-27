'use client'
import React, { useState } from 'react';

function Fetch_post() {
    const[message,Setmessage]=useState('fetch_post')

  
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

  return (
    <>
      <div id="postmessage" className="w-[100%] bg-black text-green-800 text-center text-[30px]">{message}</div>

      <form onSubmit={add_do} style={{ direction: 'ltr' }} className="flex flex-col gap-5 max-w-xl bg-slate-800 rounded-md p-8 mx-auto">
        <input type="text" name="title" placeholder="Title ..." className="p-2 bg-slate-600 outline-none rounded-md" />
        <input type="text" name="body" placeholder="body ..." className="p-2 bg-slate-600 outline-none rounded-md" />
        <button type="submit" className="p-2 bg-slate-900 text-slate-100 rounded-md">add</button>
      </form>
    </>
  );
}

export default Fetch_post;