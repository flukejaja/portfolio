'use client'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function NavLeft() {
    const Name = 'pakkapong sittiporn'.toUpperCase().split('')
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    return (
      <>
      {
          Name.map((name , idx) =>{
            return <p key={idx}  className='text-center'>{name}</p>
          })
         }
      </>
    )
}