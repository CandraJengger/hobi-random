const all = require('../all');

test('make sure all item in array is string ', () => {
  const actual = all().every((currentValue) => {
    return typeof currentValue === 'string';
  });

  expect(actual).toBe(true);
});
