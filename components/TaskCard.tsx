'use client';

type Task = {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority?: string;
  dueDate?: string;
  assignee?: { name: string; email: string };
  project?: { name: string };
};

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-800">{task.title}</h3>
          {task.description && (
            <p className="text-sm text-gray-500 mt-1">{task.description}</p>
          )}
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${
            task.status === 'DONE'
              ? 'bg-green-100 text-green-800'
              : task.status === 'IN_PROGRESS'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {task.status}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
        {task.assignee && <span>👤 {task.assignee.name}</span>}
        {task.dueDate && (
          <span>📅 {new Date(task.dueDate).toLocaleDateString()}</span>
        )}
        {task.priority && <span>🚩 {task.priority}</span>}
        {task.project && <span>📁 {task.project.name}</span>}
      </div>
    </div>
  );
}