// build your `Task` model here
const db = require("../../data/dbConfig");

// Query for GET response

// SELECT
//  t.task_id, t.task_description, t.task_notes, t.task_completed, p.project_name, p.project_description
// FROM tasks AS t
// LEFT JOIN projects AS p
//  ON p.project_id = t.project_id

async function findAll() {
  const tasks = await db("tasks as t")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    )
    .leftJoin("projects as p", "p.project_id", "t.project_id");

  const isComplete = tasks.map((data) => {
    if (data.task_completed === 0) {
      return {
        task_id: data.task_id,
        task_description: data.task_description,
        task_notes: data.task_notes,
        task_completed: false,
        project_name: data.project_name,
        project_description: data.project_description,
      };
    } else if (data.task_completed === 1) {
      return {
        task_id: data.task_id,
        task_description: data.task_description,
        task_notes: data.task_notes,
        task_completed: true,
        project_name: data.project_name,
        project_description: data.project_description,
      };
    } else {
      return data;
    }
  });
  return isComplete;
}

// Query for POST response

// INSERT INTO
// 	tasks AS t
// VALUES ("task_description", "task_notes", "task_completed", "project_id")

async function add(task) {
  const newTask = await db("tasks as t").insert(task);

  return db("tasks as t").where("t.task_id", newTask);
}

module.exports = {
  findAll,
  add,
};
