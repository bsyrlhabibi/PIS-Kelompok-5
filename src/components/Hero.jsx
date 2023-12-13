import React from 'react';
import styled from "styled-components";
import { other_images } from '../utils/images';

const Hero = () => {
  return (
    <HeroWrapper className = "bg-black">
      <div className='container h-100 flex'>
        <div className='hero-content'>
        <h1>Maju Terus.</h1>
        <p>Pelajari keterampilan yang Anda butuhkan untuk melangkah ke depan dan setiap langkah berikutnya. Jika Anda ingin belajar, kemungkinan besar kami memiliki materi tersebut. Selengkapnya segera hadir.</p>
        </div>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  background: url(${other_images.hero_img}) center/cover no-repeat;
  height: 300px;

  .container{
    .hero-content{
      background-color: var(--clr-white);
      max-width: 440px;
      width: 100%;
      margin-left: 0;
      padding: 20px;

      h1{
        font-size: 32px;
        margin-bottom: 5px;
        white-space: nowrap;
      }
      p{
        font-size: 15px;
      }
    }
  }
`;

export default Hero