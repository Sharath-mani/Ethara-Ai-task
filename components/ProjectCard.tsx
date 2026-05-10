'use client';

type Project = {
  id: string;
  name: string;
  description?: string;
  _count?: { tasks: number; members: number };
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition cursor-pointer">
      <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
      {project.description && (
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {project.description}
        </p>
      )}
      <div className="mt-4 flex gap-4 text-xs text-gray-500">
        <span>📋 {project._count?.tasks || 0} tasks</span>
        <span>👥 {project._count?.members || 0} members</span>
      </div>
    </div>
  );
}