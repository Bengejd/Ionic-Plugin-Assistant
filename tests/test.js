import assert from 'assert';

describe('readFile(): ', () => {
  const readFileTests = [
    {
      input: './test/test-scss/mocha-scss/only-stylesheets/first.scss',
      expectedResult: ['.foo {', '  height: 812px;', '  width: 375px;', '  padding-left: 20px;', '  padding-right: 20px;',
        '  margin-bottom: 50px;', '}', '', '.bar {', '  height: 200px;', '  width: 267px;', '  margin-top: 90px;', '}',
        '', '.baz {', '  height: 406px;', '  width: 100px;', '  transform: translateX(20px);', '}', '', ''],
      description: 'returns an array of the file contents.'
    },
    {
      input: './test/test-scss/mocha-scss/only-stylesheets/second.scss',
      expectedResult: ['.foo {', '  height: 812px;', '  //width: 375px;', '', '}', '', '.bar {', '  height: 200px;',
        '  width: 267px;', '  margin-top: 90px;', '  /*', '   * THIS IS A BLOCK COMMENT.', '   */', '}'],
      description: 'returns an array of the file contents.'
    },
    {
      input: './test/test-scss/mocha-scss/only-stylesheets/third.scss',
      expectedResult: [],
      description: 'returns an empty array if the file is empty.'
    }
  ];
  readFileTests.forEach((sample) => {
    it(sample.description, async () => {
      const fileContents = await readFile(sample.input);
      assert.deepEqual(fileContents, sample.expectedResult);
    });
  });
});
