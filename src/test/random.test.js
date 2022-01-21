const random = require('../random');
const all = require('../all');

test('check if random name is exist in names.json ', () => {
  const hoby = random();
  const hobbies = all();

  const exist = hobbies.indexOf(hoby);

  expect(exist).not.toBe(-1);
});
