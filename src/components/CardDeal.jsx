import React from 'react';
import { card } from '../assets';
import { styles, layout } from '../style';
import Button from './Button';


const CardDeal = () => (
  <section data-aos="fade-left" data-aos-delay="500" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate sint quasi, eaque asperiores dolore perspiciatis perferendis laudantium nihil accusamus? Suscipit.</p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />
    </div>
  </section>

)

export default CardDeal