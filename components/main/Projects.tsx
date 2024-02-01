import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-100 pb-20">
      Enviro-Synergy Conference Series
      </h1>
      <div className="h-full w-full grid grid-cols-3 gap-10 px-10">
        <Link href="/one" className="cursor-pointer">
        <ProjectCard
          src="/ConferenceLogo1.jpg"
          title="Energy Efficiency and NetZero Impact on Industry 5.0"
          description="Explore the latest advancements and breakthroughs in industry 5.0 using renewable energy sources such as solar, wind, hydropower and bioenergy, with a focus on achieving NetZero emissions."
        />
        </Link>
        <Link href="/two" className="cursor-pointer">
        <ProjectCard
          src="/ConferenceLogo2.jpg"
          title="Smart Cities and Sustainable Urban Development"
          description="Explore innovative technologies and practices in the construction industry, focusing on achieving NetZero emissions through energy-efficient designs, materials, and sustainable methods. "
        />
        </Link>
        <Link href="/three" className="cursor-pointer">
        <ProjectCard
          src="/ConferenceLogo3.jpg"
          title="AI Driven Climate Monitoring and Environmental Conservation"
          description="Focus on technologies that enable effective monitoring of climate change, environmental conditions and conservation efforts, including applications in biodiversity, forestry, and water resource management."
        />
        </Link>
        <Link href="/four" className="cursor-pointer">
        <ProjectCard
          src="/ConferenceLogo4.jpg"
          title="Waste Management"
          description="Innovative approaches and technologies promoting waste reduction and efficient waste management practices."
        />
        </Link>
        <Link href="/five" className="cursor-pointer">
        <ProjectCard
          src="/ConferenceLogo5.jpg"
          title="Green Innovations in Industry"
          description="Highlight technological solutions fostering sustainability in various industries including green manufacturing and green computing with a focus on reducing environmental impact."
        />
        </Link>
        <Link href="/six" className="cursor-pointer">
        <ProjectCard
          src="/ConferenceLogo6.jpg"
          title="Climate-Resilient Agriculture and Green Finance"
          description="Explore technologies and practices promoting sustainable agriculture, precision farming and climate-resilient food systems, aligning with NetZero emission targets in the agricultural sector.
          Discuss the role of green finance, investment strategies and financial innovations in supporting NetZero emission projects and initiatives, fostering sustainable development."
        />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
