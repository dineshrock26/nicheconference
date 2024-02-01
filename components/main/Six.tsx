import Image from 'next/image'
import React from 'react'

const Three = () => {
  return (
    <div className='w-full h-full border border-green-700 p-20'>
      <div className='w-full h-full flex flex-col items-center justify-center py-10'>
        <Image className=' rounded-full shadow-lg' src="/ConferenceLogo6.jpg" alt="logo" width={200} height={200} />
        <h3 className='text-2xl font-bold py-10'>Climate-Resilient Agriculture and Green Finance</h3>
          <p className='text-justify'>Climate-Resilient Agriculture and Green Finance Enviro-Synergy series aims to bring together researchers, practitioners, policymakers, and industry experts from around the globe to share knowledge, insights, and innovations in the realm of sustainable agriculture and green finance. The conference will provide a platform for discussing cutting-edge technologies, best practices, and financial strategies to foster climate-resilient food systems and achieve NetZero emissions in the agricultural sector.
           </p>
          <h1 className='text-2xl font-bold py-10'>Key Focus Areas</h1>
          <p className='text-justify'>1.	Sustainable farming technologies
2.	Climate-smart agriculture policies
3.	Precision farming and IoT applications
4.	Renewable energy in agriculture
5.	Financial inclusion in agribusiness
6.	Agro-ecological practices and their impact
7.	Carbon trading and offset projects in agriculture
8.	Block-chain applications in agri-finance
9.	Climate risk insurance for farmers
10.	Impact investing in sustainable agriculture
11.	Adaptive agroforestry models
12.	Data analytics for agricultural finance
13.	Mobile banking for rural communities
14.	Green bonds and sustainable finance
15.	Crop diversification for climate resilience
16.	Transparency and traceability in supply chains
17.	Block chain for fair trade and ethical sourcing
18.	Involving local communities in decision-making
19.	Farmer cooperatives and collective action
20.	Social innovation in sustainable agriculture
21.	Cost-benefit analysis of sustainable practices
22.	Incentive structures for farmers
23.	Economic resilience in the face of climate change
24.	Climate-Resilient Agricultural Policies:
25.	Government initiatives supporting sustainable farming
26.	Policy frameworks for climate-smart agriculture
27.	Challenges and opportunities in policy implementation
28.	Microfinance for sustainable agriculture
29.	Crowd funding for small-scale farmers
30.	Social impact investment in agriculture
</p>
      </div>
      
    </div>
    
  )
}

export default Three;