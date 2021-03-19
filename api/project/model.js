// build your `Project` model here
const db = require("../../data/dbConfig");

// Query for GET response

// SELECT
// 	*
// FROM projects AS p

async function findAll() {
  const layout = await db("projects as p").select("p.*");

  const isComplete = layout.map((data) => {
    if (data.project_completed === 0) {
      return {
        project_id: data.project_id,
        project_name: data.project_name,
        project_description: data.project_description,
        project_completed: false,
      };
    } else if (data.project_completed === 1) {
      return {
        project_id: data.project_id,
        project_name: data.project_name,
        project_description: data.project_description,
        project_completed: true,
      };
    } else {
      return data;
    }
  });
  return isComplete;
}

// Query for POST response

// INSERT INTO
// 	projects AS p
// VALUES ("project_name", "project_description", "project_completed")

async function add(project) {
  const newProject = await db("projects as p").insert(project);
  return db("projects as p").where("p.project_id", newProject);

  // if (project.project_completed === false) {
  //   db("projects as p").insert({
  //     project_id: project.project_id,
  //     project_name: project.project_name,
  //     project_description: project.project_description,
  //     project_completed: 0,
  //   });
  // } else if (project.project_completed === true) {
  //   db("projects as p").insert({
  //     project_id: project.project_id,
  //     project_name: project.project_name,
  //     project_description: project.project_description,
  //     project_completed: 1,
  //   });
  // } else if (!project.project_completed) {
  //   db("projects as p").insert({
  //     project_id: project.project_id,
  //     project_name: project.project_name,
  //     project_description: project.project_description,
  //     project_completed: null,
  //   });
  // }
}

module.exports = {
  findAll,
  add,
};
