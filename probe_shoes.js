const fs = require('fs');
const { execSync } = require('child_process');

for (let id = 211; id <= 226; id++) {
  ['a', 'b'].forEach(suffix => {
    const file = `images/shoes_${id}_${suffix}.webp`;
    if (fs.existsSync(file)) {
      try {
        const out = execSync(`ffprobe -v error -show_entries stream=width,height,codec_name -of default=noprint_wrappers=1 ${file}`).toString().trim().replace(/\n/g, ', ');
        console.log(`${file}: ${out}`);
      } catch (e) {
        console.log(`${file}: FFPROBE ERROR: ${e.message}`);
      }
    } else {
      console.log(`${file}: MISSING!`);
    }
  });
}
