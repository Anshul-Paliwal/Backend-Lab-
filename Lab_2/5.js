const fs = require('fs');
const nonExistentFile = 'non_existent_file.txt';
const readableStream = fs.createReadStream(nonExistentFile);
readableStream.on('error', (error) => {
  console.error(`An error occurred while trying to read the file: ${error.message}`);
  console.error('Error details:', error);
});
readableStream.on('data', (chunk) => {
  console.log(`Received data chunk: ${chunk}`);
});
readableStream.on('end', () => {
  console.log('Finished reading the stream.');
});
