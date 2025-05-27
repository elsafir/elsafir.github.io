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
    <section className="relative py-24 px-6 bg-gradient-to-tr from-indigo-100 via-white to-pink-100">
      {/* Decorative background blob */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#f0abfc" />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad)"
            d="M0,300 C150,200 350,400 500,300 C650,200 800,400 800,400 L0,400 Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-16 drop-shadow-sm">
          {title}
        </h2>

        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <PortofolioCard
              key={index}
              {...project}
              image={project.image ?? ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
