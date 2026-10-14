const fs = require('fs');
const content = fs.readFileSync('data.js', 'utf8');

// match shoes products
const shoesMatches = content.match(/\{\s*"id":\s*\d+,\s*"mainCategory":\s*"shoes"[\s\S]*?"image2":\s*"[^"]+"/g) || [];
console.log('Total shoes in data.js:', shoesMatches.length);

shoesMatches.forEach((m, idx) => {
  const id = m.match(/"id":\s*(\d+)/)[1];
  const designer = m.match(/"designer":\s*"([^"]+)"/)[1];
  const title = m.match(/"title":\s*"([^"]+)"/)[1];
  const img1 = m.match(/"image1":\s*"([^"]+)"/)[1];
  const img2 = m.match(/"image2":\s*"([^"]+)"/)[1];
  const exists1 = fs.existsSync(img1);
  const exists2 = fs.existsSync(img2);
  console.log(`[${idx + 1}] ID:${id} ${designer} - ${title.slice(0, 30)} | img1:${img1} (${exists1 ? 'OK' : 'MISSING'}) | img2:${img2} (${exists2 ? 'OK' : 'MISSING'})`);
});
