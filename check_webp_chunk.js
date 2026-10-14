const fs = require('fs');

[211, 212, 213, 214, 215, 216].forEach(id => {
  const file = `images/shoes_${id}_a.webp`;
  const buf = fs.readFileSync(file);
  const fourCC = buf.slice(12, 16).toString();
  console.log(`${file}: 4CC=${fourCC}, size=${buf.length}`);
});
