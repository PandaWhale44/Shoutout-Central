const fs = require('fs');
const path = require('path');

const dummyEntries = JSON.parse(
  fs.readFileSync(path.resolve('./server/db/assets/shoutoutDummyEntries.json'))
);

const text = fs
  .readFileSync(path.resolve('./server/db/assets/shoutoutDummyContents'))
  .toString('utf-8');
const textArr = text.split('\n');

dummyEntries.map((el, i) => {
  el.contents = textArr[i];
  return el;
});

fs.appendFileSync(
  path.resolve('./server/db/assets/dummyEntries.json'),
  JSON.stringify(dummyEntries)
);

const addShoutout = `
  INSERT INTO shoutouts
  (contents, sender_id, recipient_id, timestamp)
  VALUES ($1, $2, $3, $4);
`;
const dummyEntries = JSON.parse(fs.readFileSync(path.resolve('./server/db/assets/dummyEntries.json')));
// console.log(dummyEntries);
dummyEntries.forEach((obj) => {
  const { contents, sender_id, recipient_id, timestamp } = obj;
  pool.query(addShoutout, [contents, sender_id, recipient_id, timestamp], (err, result) => {
    if (err) console.error(err);
    console.log(result);
  });
});