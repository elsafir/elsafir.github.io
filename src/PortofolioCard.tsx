// src/components/PortfolioCard.tsx
import React from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  video?: string;
};

const PortofolioCard: React.FC<Project> = ({ title, description, image, video }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition transform hover:scale-[1.02] hover:shadow-xl duration-300">
      {video ? (
        <video controls className="w-full h-60 object-cover">
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img src={image} alt={title} className="w-full h-60 object-cover" />
      )}
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default PortofolioCard;
