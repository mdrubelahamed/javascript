import inquirer from 'inquirer';
import qr from 'qr-image';
import { createWriteStream } from 'fs';

// var inquirer = require("inquirer");

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "string",
      message: "What is your text?"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const text = answers.string;
    const qrSvg = qr.image(`${text}`, { type: 'svg' });
    const writeStream = createWriteStream(`qrImage.svg`);

    qrSvg.pipe(writeStream);
    
    writeStream.on('finish', () => {
      console.log('QR code image saved to qrImage.svg');
    });
    
    const svgString = qr.imageSync(`${text}`, { type: 'svg' });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error);
    } else {
      console.log(error);
    }
  });

 
