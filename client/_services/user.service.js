export const userService = {
  register,
  login,
  // logout,
};

function register(email, password, firstName, lastName, affiliation, points) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...args }),
  };

  return fetch('/api/user/signup', requestOptions)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...args }),
  };

  return fetch('/api/user', requestOptions)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

// function logout ()
