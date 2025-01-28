'use client'
import React, { useState } from 'react';

interface PostId {
  uuid: number;
  id: number;
  title: string;
  body: string;
}

const PostId = ({ params }: { params: { id: string } }) => {
  const [message, setMessage] = useState('fetch_put');
  const [data, setData] = useState<PostId>({ uuid: 0, id: 0, title: '', body: '' });

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/`, { cache: 'no-cache' });
    const postData: PostId = await response.json();
    setData(postData);
  };

  const updatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get('title') as string;
    const body = formData.get('body') as string;
    const updatedPost = { title: title, body: body };

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPost)
    });

    if (response.ok) {
      setMessage('Post edited successfully');
      fetchData(); // Fetch data again to update the view with the edited post
    } else {
      setMessage('Failed to edit post');
    }
  };

  return (
    <>
      <div className="w-full bg-black text-white text-center text-3xl">{message}</div>

      <form onSubmit={updatePost} style={{ direction: 'ltr' }} className="flex flex-col gap-5 bg-slate-800 rounded-md p-8 mx-auto w-full md:w-1/2">
        <label className="text-white text-lg">Title</label>
        <input type="text" name="title" defaultValue={data.title} className="p-2 bg-slate-600 outline-none rounded-md text-base" />
        <label className="text-white text-lg">Body</label>
        <input type="text" name="body" defaultValue={data.body} className="p-2 bg-slate-600 outline-none rounded-md" />
        <button type="submit" className="p-2 bg-slate-900 text-slate-100 rounded-md">Update</button>
      </form>
    </>
  );
};

export default PostId;