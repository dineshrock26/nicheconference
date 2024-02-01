import Image from 'next/image'
import React from 'react'

const Two = () => {
  return (
    <div className='w-full h-full border border-green-700 p-20 text-white'>
      <div className='w-full h-full flex flex-col items-center justify-center py-10'>
        <Image className=' rounded-full shadow-lg' src="/ConferenceLogo2.jpg" alt="logo" width={200} height={200} />
        <h3 className='text-2xl font-bold py-10'>Smart Cities and Sustainable Urban Development</h3>
          <p className='text-justify'>A smart sustainable city is a forward-thinking urban area that leverages modern technologies to upgrade its infrastructure and raise the standard of living for its residents. Moreover, sustainability can be conceptualized as an enduring objective whereby the domains of the environment, society, and economy are harmoniously integrated in the pursuit of bettering human lives. In order to address the ongoing issue of climate change and other ways to enhance competitiveness, efficiency of urban operations and services, and quality of life while making sure that it satisfies the needs of both current and future generations in terms of economic, social, environmental, and cultural aspects, smart sustainable cities are the way to go. This summit goes forward to explore innovative technologies and practices in the construction industry, focusing on achieving net zero emissions through energy efficient designs, materials and sustainable methods.</p>
          <h1 className='text-2xl font-bold py-10'>Key Focus Areas</h1>
          <p className='text-justify'>1.	Ingenious Technologies for sustainable development in smart cities
2.	Remote sensing Application in urban development
3.	Impact of pollution in smart cities for sustainable growth
4.	Groundwater contamination in urbanized area
5.	Leachate problem in urbanized area
6.	Urban transport modeling in urbanized area
7.	Water infiltration and its impact on smart cities
8.	Artificial intelligence for sustainable development in smart cities
9.	Artificial neural network puzzle logic for the prediction of future development in smart cities
10.	Water logging and drainage pattern in smart cities.

</p>
      </div>
      
    </div>
    
  )
}

export default Two;