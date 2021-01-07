import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png';
import { Skeleton } from '../index';
import { Restaurant, RestaurantInfo, Title, Adress, RestaurantPhoto } from './style';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Restaurant onClick={onClick} >
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          count={5}
          isHalf
          edit={false}
          value={restaurant.rating}
          activeColor="#E7711C"
        />
        <Adress>{restaurant.vicinity || restaurant.formatted_address}</Adress>
      </RestaurantInfo>
      <RestaurantPhoto
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        alt='Foto do restaurante'
        onLoad={() => setImageLoaded(true)}
        imageLoaded={imageLoaded}
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  )
}

export default RestaurantCard