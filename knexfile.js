// do not make changes to this file (except to optionally add seeds)
const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
  pool: {
    afterCreate: (conn, done) => conn.run("PRAGMA foreign_keys = ON", done),
  },
  // typeCast: function (field, next) {
  //   console.log("TypeCasting", field.type, field.length);
  //   if (field.type == `${field.type}_completed` && field.length == 1) {
  //     let value = field.string();
  //     return value ? value == "1" : null;
  //   }
  //   return next();
  // },
  //   console.log("TypeCasting", field.type, field.length);
  //   if (field.type == `${field.type}_completed` && field.length == 1) {
  //     return field.string() == "1"; // 1 = true, 0 = false
  //   }
  //   return next();
  // },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: "./data/lambda.db3" },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: "./data/test.db3" },
  },
};
