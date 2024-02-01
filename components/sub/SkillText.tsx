"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box mb-[10px] py-[8px] px-[7px] border border-[#42f86c8b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#1e8935] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[30px] text-green-100">
            Join us to make an impact
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-gray-100 font-medium mt-[10px] text-center mb-[15px]'
        >
            Making the world a better place
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-100 mb-10 mt-[10px] text-center'
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam facilis vitae placeat aliquid distinctio voluptatem quidem iure ipsa ad quo sed, quaerat, possimus delectus minus at repellat in dignissimos.
            Tenetur fugiat deleniti mollitia molestias nemo eius quae fuga laborum laboriosam, sequi omnis quidem earum eum, quod inventore repellendus doloremque aspernatur neque tempora atque modi, nobis beatae! Porro, vel provident.
            Repellendus perspiciatis cupiditate architecto amet neque ut explicabo illo sed similique officia quis corrupti, odio ullam aliquid dolores sequi, suscipit velit et veniam minus reprehenderit qui voluptas, ex totam. Eum.
            Molestiae doloremque eaque fugiat nisi vel omnis eos quod libero molestias deleniti ex expedita, commodi reprehenderit laborum ab labore soluta, porro consectetur aut. Autem nesciunt nihil odit dolore harum aliquid!
            Repellat, non quod vitae qui quam delectus, eius maiores unde nemo nobis minima debitis esse blanditiis reprehenderit nam perferendis consequatur necessitatibus maxime accusamus! Animi libero corrupti odio necessitatibus nulla culpa?
        </motion.div>
    </div>
  )
}

export default SkillText