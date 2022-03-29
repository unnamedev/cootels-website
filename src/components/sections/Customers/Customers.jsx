import styled from "styled-components"
import data from "./data"
import {Container, SectionWrapper, Title} from "../../utils/Utils"
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import {Autoplay, Pagination} from "swiper"

/**
 * @description 🍉 Customers
 * @returns {JSX.Element}
 * @constructor
 */
const Customers = () => <Wrapper>
    <Container>
        <Title as="h2" type="h2">{data.title}</Title>

        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{clickable: true,}}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            {data.list.map((i, idx) =>
                <SwiperSlide key={idx}>
                    <img src={i.image} alt={i.text}/>
                    <p className="text">{i.text}</p>
                    <p className="name">{i.name}</p>
                </SwiperSlide>
            )}
        </Swiper>
    </Container>
</Wrapper>

/*  💅 Styled Components */
const Wrapper = styled(SectionWrapper)`
  ${Container} {
    display: block;
  }

  ${Title} {
    text-align: center;
    margin-bottom: 31px;

    @media (min-width: 992px) {
      margin-bottom: 62px;
    }
  }

  .swiper {
    padding-bottom: 34px;

    &-slide {
      display: grid;
      gap: 22px;
      text-align: center;
      justify-items: center;
      cursor: grab;
      
      @media (min-width: 992px) {
        gap: 40px;
      }

      img {
        width: 64px;
        height: 64px;
        border-radius: 50%;

        @media (min-width: 992px) {
          width: 120px;
          height: 120px;
        }
      }

      .text {
        font-size: 18px;
        color: #848FAC;
        max-width: 790px;
        width: 100%;
      }

      .name {
        font-weight: 500;
        font-size: 20px;
        line-height: 1.2;
        color: #192252;
      }
    }

    &-pagination {
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;

      &-bullet {
        width: 8px;
        height: 8px;
        transition: all 0.3s;
        background: rgba(250, 176, 71, 0.35);

        &-active {
          width: 12px;
          height: 12px;
          background: #FAB047;
        }
      }
    }
  }
`

// Exporting the component as the default export.
export default Customers
