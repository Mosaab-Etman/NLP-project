const scoreTag = require('./main');

test('return the Polarity based on the response', () => {
    expect(scoreTag('N+')).toBe('strong negative')
})

