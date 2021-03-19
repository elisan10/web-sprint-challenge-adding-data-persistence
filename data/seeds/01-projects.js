exports.seed = function (knex) {
  return knex("projects").insert([
    {
      project_id: 1,
      project_name: "Web API",
      project_description: "Build APIs",
    },
    {
      project_id: 2,
      project_name: "Databases",
      project_description: "Learn SQL",
      project_completed: 1,
    },
    { project_id: 3, project_name: "Authentication" },
  ]);
};
