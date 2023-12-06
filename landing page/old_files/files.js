const fs = require('fs');
const path = require('path');

function printDirectoryStructure(directoryPath, indent = 0) {
  const items = fs.readdirSync(directoryPath);

  items.forEach((item) => {
    const itemPath = path.join(directoryPath, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      console.log(`${' '.repeat(indent)}📁 ${item}`);
      printDirectoryStructure(itemPath, indent + 2);
    } else {
      console.log(`${' '.repeat(indent)}📄 ${item}`);
    }
  });
}

// Get the current script's directory
const scriptDirectory = path.dirname(process.argv[1]);

// Print the directory structure
console.log(`Directory Structure of ${scriptDirectory}:`);
printDirectoryStructure(scriptDirectory);