import React from 'react';
import PortofolioCard from '../PortofolioCard';
import projects from '../data/project';

type Props = {
  title: string;
  filter: 'dev' | 'pr';
};

const PortfolioSection: React.FC<Props> = ({ title, filter }) => {
  const filtered = projects.filter((p) => p.category === filter);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-bl from-[#fdf2f8] via-[#f3e8ff] to-[#e0e7ff]">
      {/* Decorative background blob */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad)"
            d="M0,300 C200,200 400,400 600,300 C800,200 1000,400 1000,400 L0,400 Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-16 drop-shadow-md">
          {title}
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((project, index) => (
            <div className="transform hover:scale-[1.02] transition duration-300">
              <PortofolioCard
                key={index}
                {...project}
                image={project.image ?? ''}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-xl mx-auto">
            Click on any project to learn more about my process, tools I used, and how I approach problems and creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
