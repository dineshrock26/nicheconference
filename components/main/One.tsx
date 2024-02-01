import Image from 'next/image'
import React from 'react'

const One = () => {
  return (
    <div className='w-full h-full border border-green-700 p-20'>
      <div className='w-full h-full flex flex-col items-center justify-center py-10'>
        <Image className=' rounded-full shadow-lg' src="/ConferenceLogo1.jpg" alt="logo" width={200} height={200} />
        <h3 className='text-2xl font-bold py-10'>Energy Efficiency and NetZero Impact on Industry 5.0</h3>
          <p className='text-justify'>Energy efficiency and net zero impact on industry 5.0 pprovides a unique platform for researchers, academics, students, practitioners, and observers from various disciplines to come together and exchange knowledge, ideas, and insights on the latest advancements in renewable energy which focus on achieving Net Zero emissions (NZE). It will draw insights from diverse sectors like conventional energy, renewable energy, manufacturing, agriculture, and healthcare. Energy efficiency is centrally important to social development, economic growth and resilience, and clean energy transitions. It reduces the overall costs of mitigating carbon emissions while advancing social and economic development, enhancing energy security and quality of life, and creating jobs. At a global level, renewable energy technologies like solar, wind, bioenergy and hydropower are the key in reducing emissions from electricity supply. Industry has a vital contribution to make in achieving the NZE. This conference aim to achieve NZE by changing the existing way of production and consumption of energy in industry 5.0 through energy efficiency. Efficiency, electrification and the replacement of coal by low‐emissions sources in electricity generation play a central role in achieving net zero goals.</p>
          <h1 className='text-2xl font-bold py-10'>Key Focus Areas</h1>
          <p className='text-justify'>•	Energy efficiency and sustainability
•	Energy efficiency of the renewable energy systems
•	Energy efficiency and GHG emissions
•	Energy efficiency and conservation in industry
•	Energy efficiency in wireless networks
•	Energy efficiency assessment in smart homes
•	Energy efficiency optimization and enhancement
•	Energy efficiency in building and machines
•	Industrial human–robot collaboration
•	Industry 5.0 and its impact 
•	Industrial revolution
•	Green design and manufacturing
•	Hydrogen and fuel cell 
•	Emission from fossil fuel energy
•	Renewable energy like solar, wind, bioenergy
•	Hydropower
•	Renewable Energy Integration
•	Energy-Efficient Technologies 
•	Circular Economy Initiatives 
•	Sustainable Materials and Supply Chains 
•	Carbon Capture and Storage (CCS) 
•	Water Conservation and Management
•	Smart Manufacturing and IoT Integration 
•	Policy Support and Collaboration
•	Consumer Awareness and Demand
•	Composite Materials
•	Industrial & Engineering Management
•	Industrial decarbonization
•	Electric vehicle integration to minimize transportation pollution
•	Green energy, innovation and sustainable green buildings
•	Climate change and policy
</p>
      </div>
      
    </div>
    
  )
}

export default One;