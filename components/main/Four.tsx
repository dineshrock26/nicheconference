import Image from 'next/image'
import React from 'react'

const Four = () => {
  return (
    <div className='w-full h-full border border-green-700 p-20'>
      <div className='w-full h-full flex flex-col items-center justify-center py-10'>
        <Image className=' rounded-full shadow-lg' src="/ConferenceLogo3.jpg" alt="logo" width={200} height={200} />
        <h3 className='text-2xl font-bold py-10'>Waste Management</h3>
          <p className='text-justify'>The Waste Management Conference holds paramount importance as a forum where the global community confronts the intricate issues surrounding waste management. This gathering assembles a diverse array of stakeholders, ranging from scientists and researchers to policymakers and industry pioneers. The platform facilitates a profound exchange of insights, knowledge, and experiences, allowing participants to gain a comprehensive understanding of the latest developments and challenges in the field. In an era marked by escalating environmental concerns, the conference serves as a catalyst for fostering collaborative strategies and innovative solutions. It is a melting pot of ideas, where experts discuss cutting-edge technologies, sustainable practices, and policy frameworks aimed at mitigating the adverse impacts of waste on our ecosystems. Furthermore, the Waste Management Conference plays a pivotal role in steering the global discourse towards circular economies and responsible resource management. By elucidating the interconnectedness of environmental, economic, and social aspects of waste, the conference encourages actionable initiatives and promotes the adoption of sustainable practices worldwide. Ultimately, the significance of this conference lies in its potential to shape the trajectory of waste management on a global scale, steering humanity towards a more conscientious and environmentally sound future.
           </p>
          <h1 className='text-2xl font-bold py-10'>Key Focus Areas</h1>
          <p className='text-justify'>1.	Recycling initiatives 
2.	Sustainable waste disposal 
3.	Reducing single-use plastics 
4.	Composting and organic waste management 
5.	E-waste recycling 
6.	Circular economy principles 
7.	Community engagement in waste reduction 
8.	Green packaging solutions 
9.	Waste-to-energy technologies 
10.	Zero waste lifestyle promotion
</p>
      </div>
      
    </div>
    
  )
}

export default Four;