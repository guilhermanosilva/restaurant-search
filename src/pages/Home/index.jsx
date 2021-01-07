import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';

import { Wrapper, Container, Search, Logo, CarouselTitle, Carousel, ModalTitle, ModalContent } from './style';

const Home = () => {

  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);


  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,

    adaptativeHeigh: true,
    arrow: false,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    };
  };

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />

          <TextField
            label='Pesquisar restaurante'
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>

          <CarouselTitle>Na sua área</CarouselTitle>


          {restaurants.length > 0 ? (
            <>
              <Carousel {...settings}>
                {restaurants.map((restaurant) => (
                  <Card
                    key={restaurant.place_id}
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
            </>
          ) : (
              <Loader />
            )}

        </Search>

        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.place_id}
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}

      </Container>

      <Map query={query} placeId={placeId} />

      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <>
        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
        <ModalContent>{restaurantSelected?.opening_hours?.open_now ? "Aberto agora!" : "Fechado neste momento"}</ModalContent>
        </>
        ) : (
          <>
            <Skeleton width="10px" height="20px"/>
            <Skeleton width="10px" height="16px"/>
            <Skeleton width="10px" height="16px"/>
            <Skeleton width="10px" height="16px"/>
          </>
        )}
      </Modal>

    </Wrapper>
  );

};
export default Home;