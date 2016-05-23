var assert = require('chai').assert;
var Poem = require('../poem')
var input = require('../bin/poem');

describe('Poem', function() {
  it('returns the title of a poem', function () {
    var poem = new Poem(input);
    assert.equal(poem.title, 'In Possum Land');
  });
  it('returns the author of a poem', function () {
    var poem = new Poem(input);
    assert.equal(poem.author, 'Henry Lawson');
  });
  it('returns the number of verses in a poem', function () {
    var poem = new Poem(input);
    assert.equal(poem.verses, 2);
  });
  it('returns the number of lines in a poem', function () {
    var poem = new Poem(input);
    assert.equal(poem.lines, 8);
  });
});
