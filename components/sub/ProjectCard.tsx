import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {

  return (
    <div className="w-[400px] h-[800px] relative overflow-hidden rounded-lg shadow-lg border border-[#258750]">
      <Image
        src={src}
        alt={title}
        width= {1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-green-700">{title}</h1>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>

      <button className="absolute bottom-4 right-4 bg-green-700 text-white px-4 py-2 rounded">
        Click here for more details
      </button>

    </div>
  );
};

export default ProjectCard;
