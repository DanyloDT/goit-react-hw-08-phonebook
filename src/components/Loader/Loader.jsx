import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Bars
      height="50"
      width="50"
      color="#000000"
      ariaLabel="bars-loading"
      wrapperStyle={
        {
          // display: ' 0 auto',
          // position: 'absolute',
          // top: '50%',
          // left: '50%',
          // transform: 'translate(-50%, -50%)',
        }
      }
      wrapperClass={'Loader'}
      visible={true}
    />
  );
};
