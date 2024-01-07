import React from 'react';
import {motion} from 'framer-motion';
import burger from '../burger2.png';

const Home = () => {
    return (
    <>
        <motion.section className='mainBody'
            initial={{ scale:0 }}
            whileInView={{scale:1}}
            transition={{ ease:'linear' , duration:.5}}
        >
            <motion.div className='herotxt'
                initial={{ rotate:5 }}
            >
                <p> Welcome to <span>Bite!</span> Your Burger Haven </p>
            </motion.div>

            <motion.div className='heroimg'>
                <motion.img src={burger} 
                    initial={{ opacity:1 , rotate:10 }}
                    whileHover={{ scale:1.1 }}
                    transition={{ ease:'linear' , duration:.5 , type:'spring' , stiffness:1000 , damping:10}}
                />
            </motion.div>
        </motion.section>
    </>
)
}

export default Home