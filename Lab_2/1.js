const fs = require('fs');
const filePath = 'data.txt';
if (!fs.existsSync(filePath)) {
  console.error(`Error: The file '${filePath}' does not exist.`);
  process.exit(1);
}
const readableStream = fs.createReadStream(filePath, 'utf8');
readableStream.on('data', (chunk) => {
  console.log(chunk);
});
readableStream.on('error', (err) => {
  console.error('An error occurred:', err.message);
});