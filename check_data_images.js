const fs = require('fs');
const path = require('path');

try {
  const content = fs.readFileSync('data.js', 'utf8');
  const regex = /"image[12]":\s*"([^"]+)"/g;
  let match;
  let missing = [];
  let total = 0;
  let found = 0;

  while ((match = regex.exec(content)) !== null) {
    total++;
    const imgPath = match[1];
    if (!fs.existsSync(imgPath)) {
      missing.push(imgPath);
    } else {
      found++;
    }
  }

  console.log('TOTAL REFERENCES IN data.js:', total);
  console.log('FOUND:', found);
  console.log('MISSING COUNT:', missing.length);
  console.log('MISSING UNIQUE:', [...new Set(missing)]);
} catch (err) {
  console.error(err);
}
