import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import Img1 from '../../assets/images/project3/1.png'
import Img2 from '../../assets/images/project3/2.png'
import Img3 from '../../assets/images/project3/3.png'
import Img4 from '../../assets/images/project3/4.png'
import Img5 from '../../assets/images/project3/5.png'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SwiperBox = styled.div`
  #App {
    height: 97%;
  }
  html,
  body {
    position: relative;
    height: 97%;
  }

  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }
    .swiper-button-prev, .swiper-button-next {
        display: none;
    }

  .swiper {
 height: 97%;
      width: 40%;
      float: left;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
    .swiper-pagination-fraction {
        color: #ffb400;
        font-weight: bold;
    }
    
  .swiper-slide img {
    display: block;
    height: 600px;
      width: 500px;
    object-fit: cover;
  }
  
  .img1 {
    width-min: 300px;
  }
`


const Banner = () => {
  return (
    <SwiperBox>
      <div className="App">
        <Swiper
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>  <img src={Img1} className="img1" alt="이미지" /></SwiperSlide>
          <SwiperSlide> <img src={Img2} className="img2" alt="이미지" /></SwiperSlide>
          <SwiperSlide> <img src={Img3} className="img3" alt="이미지" /></SwiperSlide>
          <SwiperSlide> <img src={Img4} className="img4" alt="이미지" /></SwiperSlide>
          <SwiperSlide> <img src={Img5} className="img5" alt="이미지" /></SwiperSlide>
        </Swiper>
      </div>
    </SwiperBox>
  );
};
export default Banner;