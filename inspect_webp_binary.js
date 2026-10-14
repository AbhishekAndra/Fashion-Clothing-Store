const fs = require('fs');

[211, 212, 213, 214, 215, 216].forEach(id => {
  const f = `images/shoes_${id}_a.webp`;
  const buf = fs.readFileSync(f);
  console.log(`=== ${f} ===`);
  console.log('Size:', buf.length);
  console.log('Magic:', buf.slice(0, 4).toString(), 'Filesize:', buf.readUInt32LE(4), 'FourCC:', buf.slice(8, 12).toString());
  console.log('Chunk:', buf.slice(12, 16).toString(), 'ChunkSize:', buf.readUInt32LE(16));
  console.log('First 32 bytes hex:', buf.slice(0, 32).toString('hex'));
});
