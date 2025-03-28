"use client"
import { useState } from "react";

interface Project {
  id: number;
  name: string;
  client: string;
  status: "Ongoing" | "Completed" | "Pending";
  priority: "Low" | "Medium" | "High" | "Critical";
  deadline: string;
  team: string[];
}

const projects: Project[] = [
  {
    id: 1,
    name: "CRM Dashboard Development",
    client: "Acme Corp",
    status: "Ongoing",
    priority: "High",
    deadline: "2025-04-15",
    team: ["Alice", "Bob", "Charlie"],
  },
  {
    id: 2,
    name: "E-commerce Redesign",
    client: "ShopEase",
    status: "Completed",
    priority: "Medium",
    deadline: "2025-03-20",
    team: ["David", "Eve"],
  },
];

export default function ProjectPage() {
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Projects</h1>
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Project Name</th>
              <th className="border border-gray-300 p-2">Client</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Priority</th>
              <th className="border border-gray-300 p-2">Deadline</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.id} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{project.name}</td>
                <td className="border border-gray-300 p-2">{project.client}</td>
                <td className={`border border-gray-300 p-2 ${
                  project.status === "Ongoing" ? "text-yellow-500" :
                  project.status === "Completed" ? "text-green-500" :
                  "text-red-500"
                }`}>{project.status}</td>
                <td className="border border-gray-300 p-2">{project.priority}</td>
                <td className="border border-gray-300 p-2">{project.deadline}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">{selectedProject.name}</h2>
            <p><strong>Client:</strong> {selectedProject.client}</p>
            <p><strong>Status:</strong> {selectedProject.status}</p>
            <p><strong>Priority:</strong> {selectedProject.priority}</p>
            <p><strong>Deadline:</strong> {selectedProject.deadline}</p>
            <p><strong>Team Members:</strong> {selectedProject.team.join(", ")}</p>
            <button
              className="mt-4 bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
