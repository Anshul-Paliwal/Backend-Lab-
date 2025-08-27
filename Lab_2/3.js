const fs = require('fs');
const inputFilePath = 'input.txt';
const outputFilePath = 'output.txt';
if (!fs.existsSync(inputFilePath)) {
  console.error(`Error: The input file '${inputFilePath}' does not exist.`);
  process.exit(1);
}
console.log(`Piping data from '${inputFilePath}' to '${outputFilePath}'...`);
const readableStream = fs.createReadStream(inputFilePath);
const writableStream = fs.createWriteStream(outputFilePath);
readableStream.pipe(writableStream);
writableStream.on('finish', () => {
  console.log('Piping complete! The content has been successfully copied.');
  console.log(`Check the '${outputFilePath}' file.`);
});
readableStream.on('error', (err) => {
  console.error('An error occurred while reading the input file:', err.message);
});
writableStream.on('error', (err) => {
  console.error('An error occurred while writing to the output file:', err.message);
});