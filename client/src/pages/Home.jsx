import React, { useContext } from 'react';
import { PostContext } from '../contexts/PostContext';
import { Link } from 'react-router-dom';
import routes from '../routes';

const Home = () => {
  const { posts } = useContext(PostContext);
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Welcome to the Blog Website!
      </h2>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">If Posts don't appear then Relogin to the site</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-300 transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-800 mb-4">{post.content}</p>
              <p className="text-gray-600 mb-4 italic">{post.excerpt}</p>
              <p className="text-sm text-gray-500 mb-2">
                Created by <span className="font-semibold">{post.author.name}</span> on {new Date(post.createdAt).toLocaleString()}
              </p>
              {/* <Link 
                to={`${routes.postDetail.replace(':id', post.id)}`} 
                className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Post
              </Link> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
