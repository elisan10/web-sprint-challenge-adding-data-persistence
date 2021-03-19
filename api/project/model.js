// build your `Project` model here
const db = require("../../data/dbConfig");

// Query for GET response

// SELECT
// 	*
// FROM projects AS p

function findAll() {}

// Query for POST response

// INSERT INTO
// 	projects AS p
// VALUES ("project_name", "project_description", "project_completed")

function add() {}

module.exports = {
  findAll,
  add,
};
