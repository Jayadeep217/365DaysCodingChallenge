const fs = require("fs");
const path = require("path");

const basePath = path.join(__dirname, ".temp");
const subPaths = {
  "DSA/DailyProgressReport": [365, 3, "_Day"],
  "FullStack/DailyProgressReport": [365, 3, "_Day"],
  "ProgressReport/monthly": [12, 2, "_month"],
  "ProgressReport/weekly": [52, 2, "_week"],
};
const ext = ".md";

function createFile(fileName) {
  // Ensure the directory exists
  const dir = path.dirname(fileName);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true }); // Create parent directories if needed
  }

  // Check if file exists before creating
  if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, ""); // Create new file
    console.log(`File created: ${fileName}`);
  } else {
    console.log(`File already exists: ${fileName}, skipping.`);
  }
  console.log(`File created: ${fileName}`);
}

for (const [subPath, [fileCount, zeros, baseFilename]] of Object.entries(
  subPaths
)) {
  for (let i = 1; i <= fileCount; i++) {
    const paddedNumber = String(i).padStart(zeros, "0");
    const finalFilename = path.join(
      basePath,
      subPath,
      `${paddedNumber}${baseFilename}${i}${ext}`
    );
    createFile(finalFilename);
  }
}
