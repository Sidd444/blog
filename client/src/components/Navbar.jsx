import { AuthContext } from '../contexts/AuthContext';
import {useContext} from 'react';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center p-4 shadow-md">
      <h1 className="text-2xl font-bold">Blogger</h1>
      {user ? (
        <span className="text-xl font-bold">{user.name}</span>
      ) : (
        <span className="italic">Please log in</span>
      )}
    </nav>
  );
  
};

export default Navbar;
