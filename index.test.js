var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([plugin(opts)]).process(input).then(result => {
        expect(result.css).toEqual(output);
        expect(result.warnings().length).toBe(0);
    });
}


it('does something', () => {
    return run('a{ font-size: 20px; }', 'a{ font-size: 2.66667vw; }', { });
});
