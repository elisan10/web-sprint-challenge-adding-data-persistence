// build your `Task` model here
const db = require("../../data/dbConfig");

// Query for GET response

// SELECT
//  t.task_id, t.task_description, t.task_notes, t.task_completed, p.project_name, p.project_description
// FROM tasks AS t
// LEFT JOIN projects AS p
//  ON p.project_id = t.project_id

function findAll() {}

// Query for POST response

// INSERT INTO
// 	tasks AS t
// VALUES ("task_description", "task_notes", "task_completed", "project_id")

function add() {}

module.exports = {
  findAll,
  add,
};
