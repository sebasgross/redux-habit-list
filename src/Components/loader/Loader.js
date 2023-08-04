import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import './TailSpin.css';

const Loader = () => {
  return (
    <div>
      <TailSpin
        height={80}
        width={80}
        color="#4fa94d"
        wrapperClass="loader"
      />
    </div>
  );
};

export default Loader;