// build your `Resource` model here
const db = require("../../data/dbConfig");

// Query for GET response

// SELECT
// 	*
// FROM resources AS r

function findAll() {}

// Query for POST response

// INSERT INTO
// 	resources AS r
// VALUES ("resource_name", "resource_description")

function add() {}

module.exports = {
  findAll,
  add,
};
