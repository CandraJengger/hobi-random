const all = require('../all');

test('it works ', () => {
  const actual = all().every((currentValue) => {
    return typeof currentValue === 'string';
  });

  expect(actual).toBe(true);
});
