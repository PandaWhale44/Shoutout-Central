export const shoutoutService = {
  shoutoutGet,
  shoutoutAdd,
};

function shoutoutGet() {
  const requestOptions = {
    method: 'GET',
  };

  return fetch('/api/shoutout', requestOptions).then(handleResponse);
}

function shoutoutAdd(contents, sender_id, recipient_id, timestamp) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents,
      sender_id,
      recipient_id,
      timestamp,
    }),
  };

  return fetch(`/api/shoutout`, requestOptions).then(handleResponse);
}
