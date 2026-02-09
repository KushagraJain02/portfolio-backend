import {
  fetchAllProjects,
  fetchProjectBySlug,
} from "../services/project.service.js";

export const getAllProject = (req, res) => {
  const projects = fetchAllProjects();

  res.status(200).json({
    success: true,
    data: projects,
  });
};

export const getProjectBySlug = (req, res) => {
  const { slug } = req.params;
  const project = fetchProjectBySlug(slug);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found",
    });
  }

  res.status(200).json({
    success: true,
    data: project,
  });
};
