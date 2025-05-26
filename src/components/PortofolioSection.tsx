// src/components/PortfolioSection.tsx
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
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">{title}</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filtered.map((project, index) => (
          <PortofolioCard key={index} {...project} image={project.image ?? ''} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
