// build your `Resource` model here
const db = require("../../data/dbConfig");

// Query for GET response

// SELECT
// 	*
// FROM resources AS r

async function findAll() {
  return await db("resources as r").select("r.*");
}

// Query for POST response

// INSERT INTO
// 	resources AS r
// VALUES ("resource_name", "resource_description")

async function add(resource) {
  const newResource = await db("resources as r").insert(resource);
  return db("resources as r").where("r.resource_id", newResource);
}

module.exports = {
  findAll,
  add,
};
