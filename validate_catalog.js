const fs = require('fs');

const code = fs.readFileSync('data.js', 'utf8');
const productsData = eval(code + '; productsData;');

console.log('Loaded productsData, length =', productsData.length);

let broken = [];
productsData.forEach(p => {
  const img1 = p.image1;
  const img2 = p.image2;
  
  if (!fs.existsSync(img1)) {
    broken.push({ id: p.id, designer: p.designer, title: p.title, field: 'image1', file: img1 });
  }
  if (!fs.existsSync(img2)) {
    broken.push({ id: p.id, designer: p.designer, title: p.title, field: 'image2', file: img2 });
  }
});

console.log('Total broken images:', broken.length);
if (broken.length > 0) {
  console.log(JSON.stringify(broken, null, 2));
} else {
  console.log('All productsData images exist on disk!');
}
