exports.seed = function (knex) {
  return knex("project_resources").insert([
    { project_resources_id: 1, project_id: 1, resource_id: 1 },
    { project_resources_id: 2, project_id: 1, resource_id: 2 },
    { project_resources_id: 3, project_id: 1, resource_id: 2 },
  ]);
};
