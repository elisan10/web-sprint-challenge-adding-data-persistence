exports.seed = function (knex) {
  return knex("tasks").insert([
    { task_id: 1, task_description: "Do foo", project_id: 1 },
    {
      task_id: 2,
      task_description: "Do bar",
      task_notes: "Use Postman!",
      project_id: 1,
    },
    {
      task_id: 3,
      task_description: "Do baz",
      task_notes: "Have fun!",
      task_completed: 1,
      project_id: 2,
    },
  ]);
};
