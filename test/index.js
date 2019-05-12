import assert from 'assert';

describe('initial test()', () => {
  const initialTests = [
    {
      input: true,
      expectedResult: true,
      description: 'returns true when receiving "true"',
    },
  ];
  initialTests.forEach((sample) => {
    it(sample.description, async () => {
      assert.equal((sample.input), sample.expectedResult);
    });
  });
});
