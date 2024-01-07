import React from 'react';
import {motion} from 'framer-motion';
import burger1 from '../burger2.png';
import burger2 from '../burger3.png';
import burger5 from '../burger5.png';
import bigPac from '../bigpac.png';
import studentPac from '../studentPac.png';
import sunday from '../sunday.png'

const Menu = () => {
  return (
    <>
      <motion.section className='menuBody' layout>
        <motion.div className='productCard1'
          layout
        >
          <motion.img src={burger1} width={400} initial={{rotate:-10}} whileHover={{rotate: 0}} transition={{ease:'linear' , type:'spring' , stiffness:1000}}/>
          <motion.div initial={{rotate:-10 , translateX:0}} className='price'>DELICIOUS BITE! BURGER</motion.div>
        </motion.div>
        <motion.div className='productCard2'
          layout
        >
          <motion.img src={burger2} width={350} initial={{rotate:-10}} whileHover={{rotate: 0}} transition={{ease:'linear' , type:'spring' , stiffness:1000}}/>
          <motion.div initial={{rotate:-10 , translateX:0}} className='price'>DELICIOUS BITE! BURGER</motion.div>
        </motion.div>
        <motion.div className='productCard3'
          layout
        >
          <motion.img src={burger5} width={450} height={400} initial={{rotate:-10 , translateX:-50}} whileHover={{rotate: 0}} transition={{ease:'linear' , type:'spring' , stiffness:1000}}/> 
          <motion.div initial={{rotate:-10 , translateY:0 , translateX:0}} className='price'>DELICIOUS BITE! BURGER</motion.div>
        </motion.div>
        <motion.div className='productCard4'
          layout
        >
          <motion.img src={bigPac} width={500} height={400} initial={{rotate:-10 , translateX:-50}} whileHover={{rotate: 0}} transition={{ease:'linear' , type:'spring' , stiffness:1000}}/> 
          <motion.div initial={{rotate:-10 , translateY:50 , translateX:0}} className='price'>BITE! STUDENT PACK</motion.div>
        </motion.div>
        <motion.div className='productCard5'

        >
          <motion.img src={studentPac} width={500} height={400} initial={{rotate:-10 , translateX:-50}} whileHover={{rotate: 0}} transition={{ease:'linear' , type:'spring' , stiffness:1000}}/> 
          <motion.div initial={{rotate:-10 , translateY:30 , translateX:0}} className='price'>BITE! STUDENT PACK</motion.div>
        </motion.div>
        <motion.div className='productCard6'
          layout
        >
          <motion.img src={sunday} initial={{rotate:-10}} whileHover={{rotate: 0}} transition={{ease:'linear' , type:'spring' , stiffness:1000}}/> 
          <motion.div initial={{translateY:30}} className='price'>BITE! TASTY SUNDAY</motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default Menu