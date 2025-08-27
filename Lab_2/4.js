process.stdin.setEncoding('utf8');
console.log('Please enter your name:');
process.stdin.on('data', (input) => {
  const name = input.toString().trim();
  if (name) {
    console.log(`Hello, ${name}!`);
    process.exit();
  } else {
    console.log('Invalid name. Please enter your name:');
  }
});
