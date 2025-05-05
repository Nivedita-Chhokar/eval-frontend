import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used w/in an AuthProvider');
  }
  
  return context;
};

export default useAuth;
