const fs = require('fs');
const fontkit = require('fontkit');

// open a font synchronously
const font = fontkit.openSync('src/fonts/NotoSerifCJKjp-Regular.otf');

// layout a string, using default shaping features.
// returns a GlyphRun, describing glyphs and positions.
const run = font.layout('hello world!');

// create a font subset
const subset = font.createSubset();
run.glyphs.forEach(function(glyph) {
    console.log(glyph);
    subset.includeGlyph(glyph);
});

subset.encodeStream().pipe(fs.createWriteStream('subset.otf'));
