import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMessage } from './slices/messageSlice';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  const { message, status } = useSelector((state) => state.message);
  if (status === 'loading') {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <h1>{message}</h1>
      <Link to="/">Home</Link>
    </>
  );
};

export default Greeting;
