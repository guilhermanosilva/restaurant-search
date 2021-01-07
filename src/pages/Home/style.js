import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FFFFFF;
  padding: 16px;
`;

export const Logo = styled.img`
  margin-bottom: 16px;
`;

export const Carousel = styled(Slider)`
  .slick-track {
    height: 100px;
    display: flex;
  }
  .slick-slide {
    margin-left: 30px;
  }
`;

export const Map = styled.div`
  background-color: gray;
  width: 100%;
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.text}; 
  font-family: ${(props) => props.theme.fonts.regular};
  letter-spacing: 0.11px;
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled.p`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.text}; 
  font-family: ${(props) => props.theme.fonts.regular};
  letter-spacing: 0.11px;
  line-height: 19px;
  font-size: 16px;
  font-weight: normal;
`;