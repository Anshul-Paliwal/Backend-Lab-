const fs = require('fs');
const filePath = 'output.txt';
const data = 'Hello, Node.js!';
const writableStream = fs.createWriteStream(filePath);
writableStream.write(data, 'utf8');
writableStream.end();
writableStream.on('finish', () => {
  console.log(`Successfully wrote "${data}" to ${filePath}`);
});
writableStream.on('error', (err) => {
  console.error('An error occurred while writing to the file:', err.message);
});