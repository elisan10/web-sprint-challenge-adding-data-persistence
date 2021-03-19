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

async function getById(id) {
  const project = await db("projects").where("project_id", id).first();

  project.project_completed === 0
    ? (project.project_completed = false)
    : (project.project_completed = true);

  return project;
}

async function add(project) {
  const [id] = await db("projects").insert(project);
  return getById(id);
  // console.log({ project });

  // const rename = () => {
  //   if (project.project_completed === false) {
  //     return (project.project_completed = 0);
  //   } else if (project.project_completed === true) {
  //     return (project.project_completed = 1);
  //   }
  // };

  // const rename = {
  //   project_name: project.project_name,
  //   project_description: project.project_description,
  //   project_completed: project.project_completed ? 1 : 0,
  // };

  // const newProject = await db("projects as p").insert(project);

  // console.log(newProject);
  // // .boolean("project_completed");
  // return db("projects as p").where("p.project_id", newProject);

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
