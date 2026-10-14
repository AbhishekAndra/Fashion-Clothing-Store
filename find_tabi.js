const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') || f.endsWith('.js'));
for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('Tabi Soft Calfskin') || c.includes('shoes_214') || c.includes('Cagole 90mm')) {
    console.log('Found match in:', f);
  }
}
