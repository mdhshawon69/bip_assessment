import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <div className='bg-backdrop fixed inset-0 z-30 flex justify-center items-center'>
        <Bars
          height='80'
          width='80'
          color='#8263E2'
          ariaLabel='bars-loading'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loader;
