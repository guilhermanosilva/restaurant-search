import React, { useEffect, useState } from 'react';
import Skeleton from '../Skeleton';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 90px;
  height: 90px;
  padding: 5px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #FFFFFF;
  font-size: 14px;
  font-weight: bold;
`;

const ImageCard = ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoad = new Image();
    imageLoad.src = photo;
    imageLoad.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title> {title} </Title>
        </Card>
      )
    : <Skeleton width="90px" height="90px" />}
    </>
  )
};

export default ImageCard;