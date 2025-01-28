'use client'

import React, { useState } from 'react';

const Fetch_delete = ({ params }: { params: { id: number } }) => {
  const [message, setMessage] = useState("fetch_delete");

  fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => {
      if (response.ok) {
        setMessage('Post deleted successfully');
      } else {
        setMessage('Deleting failed');
      }
    })
    .catch((error) => {
      setMessage('An error occurred while deleting the post');
      console.error('Error deleting post:', error);
    });

  return (
    <div className="w-full bg-orange-600 text-white text-center text-3xl">{message}</div>
  );
};

export default Fetch_delete;