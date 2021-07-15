module.exports = {
  getUser: `
    SELECT _id, password FROM users
    WHERE email=$1;
  `,
  getUsers: `
    SELECT * FROM users;
  `,
  addUser: `
    INSERT INTO users 
    (email, password, firstName, lastName, affiliation)
    VALUES ($1, $2, $3, $4, $5);
  `,
  updateUser: `
    UPDATE users
    (email, password, firstName, lastName, affiliation, points)
    VALUES ($1, $2, $3, $4, $5, $6)
    WHERE email=$1
  `,
  deleteUser: `
    DELETE FROM users
    WHERE _id=$1 OR username=$1;
  `,
  getShoutouts: `
    SELECT * FROM shoutouts;
  `,
  addShoutout: `
    INSERT INTO shoutouts
    (contents, sender_id, recipient_id, timestamp)
    VALUES ($1, $2, $3, $4);
  `,
  deleteShoutout: `
    DELETE FROM shoutouts
    WHERE _id=$1;
  `,
};
