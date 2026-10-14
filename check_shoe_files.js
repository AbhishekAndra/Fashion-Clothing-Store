const fs = require('fs');

const shoes = [
  'images/shoes_211_a.webp',
  'images/shoes_212_a.webp',
  'images/shoes_213_a.webp',
  'images/shoes_214_a.webp',
  'images/shoes_215_a.webp',
  'images/shoes_216_a.webp',
  'images/shoes_214_b.webp',
  'images/shoes_215_b.webp',
  'images/shoes_216_b.webp'
];

shoes.forEach(s => {
  if (fs.existsSync(s)) {
    const stat = fs.statSync(s);
    const buf = fs.readFileSync(s);
    const header = buf.slice(0, 16).toString('hex');
    const isRiff = buf.slice(0, 4).toString() === 'RIFF';
    const isWebp = buf.slice(8, 12).toString() === 'WEBP';
    console.log(`${s}: size=${stat.size} bytes, isRiff=${isRiff}, isWebp=${isWebp}, header=${header}`);
  } else {
    console.log(`${s}: DOES NOT EXIST!`);
  }
});
