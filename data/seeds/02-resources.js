exports.seed = function (knex) {
  return knex("resources").insert([
    { resource_id: 1, resource_name: "keyboard" },
    {
      resource_id: 2,
      resource_name: "computer",
      resource_description: "Windows PC",
    },
  ]);
};
