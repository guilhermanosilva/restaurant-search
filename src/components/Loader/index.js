import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/restaurants-loading';
import notFoundLoading from '../../assets/not-found-loading';

export const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions}
    width={200}
    height={200}
    loop={true}
    autoplay={true}
  />
};

export const NotFoundLoading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFoundLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions}
    width={200}
    height={100}
  />
};
