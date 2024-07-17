import inquirer from 'inquirer';
import qr from 'qr-image';
import { createWriteStream } from 'fs';


inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "string",
      message: "Type Your text/URL:"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const text = answers.string;
    const qrpng = qr.image(`${text}`, { type: 'png' });
    const writeStream = createWriteStream(`qrImage.png`);

    qrpng.pipe(writeStream);
    
    writeStream.on('finish', () => {
      console.log('QR code image saved to qrImage.png');
    });
    
    const pngString = qr.imageSync(`${text}`, { type: 'png' });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error);
    } else {
      console.log(error);
    }
  });

 
