import React from 'react';
import { RotatingSquare } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <RotatingSquare
      visible={true}
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="rotating-square-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
