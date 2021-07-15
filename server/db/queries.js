module.exports = {
  // retrieve user when logging in
  getUser: `
    SELECT _id, password FROM users
    WHERE email=$1;
  `,
  // retrieve all users, orders from highest points to lowest in shoutouts
  getAllUsers: `
    SELECT * FROM users
    ORDER BY points DESC;
  `,
  // add users to database
  addUser: `
    INSERT INTO users 
    (email, password, firstName, lastName, affiliation)
    VALUES ($1, $2, $3, $4, $5);
  `,
  // update user values, used when incrementing user points when receiving a shoutout
  // (can be used in password recovery and editing user profile for stretch features)
  updateUser: `
    UPDATE users
    (email, password, firstName, lastName, affiliation, points)
    VALUES ($1, $2, $3, $4, $5, $6)
    WHERE email=$1
  `,
  // deleting user from database
  deleteUser: `
    DELETE FROM users
    WHERE _id=$1 OR username=$1;
  `,
  // retrieve all shoutouts, used for displaying chat history
  getShoutouts: `
    SELECT * FROM shoutouts
    ORDER BY timestamp DESC
    LIMIT 20;
  `,
  // adding shoutout to history
  postShoutout: `
    INSERT INTO shoutouts
    (contents, sender_id, recipient_id, timestamp)
    VALUES ($1, $2, $3, $4);
  `,
  // deleting shoutout from database(can be used in potential stretch feauture)
  deleteShoutout: `
    DELETE FROM shoutouts
    WHERE _id=$1;
  `,
};
