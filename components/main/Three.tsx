import Image from 'next/image'
import React from 'react'

const Three = () => {
  return (
    <div className='w-full h-full border border-green-700 p-20'>
      <div className='w-full h-full flex flex-col items-center justify-center py-10'>
        <Image className=' rounded-full shadow-lg' src="/ConferenceLogo3.jpg" alt="logo" width={200} height={200} />
        <h3 className='text-2xl font-bold py-10'>AI Driven Climate Monitoring and Environmental Conservation</h3>
          <p className='text-justify'>As the global community grapples with the escalating threat of climate change, the concept of achieving net-zero emissions has reached unprecedented heights. With climate change posing the biggest existential threat to the world, every country has set their Net-zero targets. India, being one of the worlds largest and fastest-growing economies, aims to achieve Net-zero by 2070 and has defined a Long-term Strategy for Low Carbon Development. 
           
           This conference aims to explore innovative strategies, technologies, and policies to achieve these ambitious targets and address the pressing challenges of climate change. This conference on Global Green-Tech Summit on NetZero Emission Solutions will explore the concept of Net-zero and its importance in addressing environmental, social, and economic challenges and also aims to provide a comprehensive overview of sustainability and its key dimensions, as well as highlight some of the best practices and strategies for achieving net-zero ambitions. 
            
             This conference will be a premier gathering that brings together experts, academicians, policymakers, industry leaders, researchers, and advocates to explore innovative solutions and strategies for building a more sustainable future, and drive the transition towards net-zero. 
           
             The goal of the conference is to motivate the attendees to take proactive steps towards creating a greener, and more socially equitable world.
           </p>
          <h1 className='text-2xl font-bold py-10'>Key Focus Areas</h1>
          <p className='text-justify'>•	Machine Learning for Species Identificatio
•	Predictive Climate Modeling
•	AI in Precision Agriculture for Sustainability
•	Automated Wildlife Monitoring
•	Carbon Footprint Tracking with AI
•	Intelligent Water Resource Management
•	Climate Resilience through Data Analytics
•	AI-Enhanced Forest Conservation
•	Smart Grids for Energy Efficiency in Environmental Monitoring
</p>
      </div>
      
    </div>
    
  )
}

export default Three;