const db = require('../connection');

const getUserByEmailAndPassword = (body) => {
  const queryString = `
  SELECT *
  FROM users
  WHERE email = $1
  AND password = $2;`;
  const queryParams = [body.email, body.password];
  return db
    .query(queryString, queryParams)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUserByEmailAndPassword };
