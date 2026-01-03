const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = path.join(__dirname, 'public/resume/CV Suryana 2026.pdf');
const outputPath = path.join(__dirname, 'pdf-text.txt');

console.log('Path:', pdfPath);

if (!fs.existsSync(pdfPath)) {
    console.error('File missing');
    process.exit(1);
}

const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function (data) {
    console.log('Text length:', data.text.length);
    fs.writeFileSync(outputPath, data.text);
    console.log("Success");
}).catch(function (error) {
    console.error(error);
});
