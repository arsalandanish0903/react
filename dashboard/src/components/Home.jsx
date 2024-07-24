import React from 'react';

const Home = () => {
  const posts = [
    { id: 1, title: 'Post 1', content: 'Content of the post goes here...' },
    { id: 2, title: 'Post 2', content: 'Content of the post goes here...' },
    { id: 3, title: 'Post 3', content: 'Content of the post goes here...' }
  ];

  return (
    <div className="flex-1 p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Welcome to your Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
