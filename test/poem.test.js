var assert = require('chai').assert;
var Poem = require('../poem')
var input = require('../bin/poem_1');

describe('Poem', function() {
  it('returns the title of a poem', function () {
    var poem = new Poem(input);
    assert.equal(poem.title, 'In Possum Land');
  });
  xit('returns the author of a poem', function () {
    var poem = new Poem(input);
    assert.equal(poem.author, 'Henry Lawson');
  });
  xit('returns the number of verses in a poem', function () {
    var poem = new Poem(input);
    assert.equal(poem.verses, 2);
  });
  xit('returns the number of lines in a poem', function () {
    var poem = new Poem(input);
    assert.equal(poem.lines, 8);
  });
  xit('parses a poem into a poem object', function () {
    var poem = new Poem(input);
    var expected = {
      'author' : 'Henry Lawson',
      'title' : 'In Possum Land',
      'verses' : 2,
      'lines' : 8
    }
    assert.deepEqual(poem.parsePoem(poem), expected);
  });
});
