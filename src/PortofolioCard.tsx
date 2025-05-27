import React from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  video?: string;
  link?: string;
};

const PortofolioCard: React.FC<Project> = ({ title, description, image, video, link }) => {
  return (
   <div className="bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden transition transform hover:scale-[1.02] hover:shadow-indigo-200 duration-300">
      {video ? (
        <video controls className="w-full h-60 object-cover">
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img src={image} alt={title} className="w-full h-60 object-cover" />
      )}
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-indigo-600 font-medium hover:underline"
          >
            🔗 View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default PortofolioCard;
