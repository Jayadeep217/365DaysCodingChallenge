const fs = require("fs");
const path = require("path");

const basePath = path.join(__dirname);
const subPaths = {
  "DSA/DailyProgressReport": [366, 3, "_Day"],
  "FullStack/DailyProgressReport": [366, 3, "_Day"],
  // "ProgressReport/monthly": [12, 2, "Month"],
  // "ProgressReport/weekly": [52, 2, "Week"],
};
const ext = ".md";

function createFile(fileName, fileContent) {
  try {
    // Ensure the directory exists
    const dir = path.dirname(fileName);
    fs.mkdirSync(dir, { recursive: true });

    // Write file only if it doesn't exist
    if (!fs.existsSync(fileName)) {
      fs.writeFileSync(fileName, fileContent);
      console.log(`File created: ${fileName}`);
    } else {
      console.log(`File already exists: ${fileName}, skipping.`);
    }
  } catch (error) {
    console.error(`Error creating file ${fileName}:`, error);
  }
}

for (const [subPath, [fileCount, zeros, baseFilename]] of Object.entries(
  subPaths
)) {
  for (let i = 1; i <= fileCount; i++) {
    const paddedNumber = String(i).padStart(zeros, "0");
    const finalFilename = path.join(
      basePath,
      subPath,
      //`${paddedNumber}${baseFilename}${i - 1}${ext}`
      `${baseFilename}${paddedNumber}${ext}` //for month & week
    );
    const fileContent = `# ${baseFilename.replace("_", "")} ${i - 1} Progress`;
//     const fileContent = `# ${baseFilename}ly Progress Summary  

// ## ${baseFilename} ${i}

// ### **DSA Progress**  

// ### **Full Stack Progress**

// ## **Reflections**
// `;
    createFile(finalFilename, fileContent);
  }
}
