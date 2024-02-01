import Image from 'next/image'
import React from 'react'

const Three = () => {
  return (
    <div className='w-full h-full border border-green-700 p-20'>
      <div className='w-full h-full flex flex-col items-center justify-center py-10'>
        <Image className=' rounded-full shadow-lg' src="/ConferenceLogo5.jpg" alt="logo" width={200} height={200} />
        <h3 className='text-2xl font-bold py-10'>Green Innovations in Industry</h3>
          <p className='text-justify'>Green Innovation in Industry is a prestigious event that provides a unique platform for researchers, academics, students, practitioners, and observers from various disciplines to come together and exchange knowledge, ideas, and insights on the latest advancements in green innovations. It will draw insights from diverse sectors like new energy, manufacturing, agriculture, digital economy, and healthcare. Green innovation in industry refers to the development and implementation of environmentally friendly technologies, processes, and practices within various sectors to reduce environmental impact while fostering sustainable growth. The conference aims to foster interdisciplinary collaboration and promote sustainable solutions to address global challenges, minimizing resource consumption, reducing pollution, and mitigating the negative effects of industrial activities on the environment.
           </p>
          <h1 className='text-2xl font-bold py-10'>Key Focus Areas</h1>
          <p className='text-justify'>	Renewable Energy Integration
	Energy-Efficient Technologies 
	Circular Economy Initiatives 
	Sustainable Materials and Supply Chains 
	Carbon Capture and Storage (CCS) 
	Water Conservation and Management
	Smart Manufacturing and IoT Integration 
	Policy Support and Collaboration
	Consumer Awareness and Demand
	Composite Materials
	Industrial & Engineering Management
</p>
      </div>
      
    </div>
    
  )
}

export default Three;