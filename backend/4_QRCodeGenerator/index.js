import inquirer from 'inquirer';
import qr from 'qr-image';
import { createWriteStream } from 'fs';
import { writeFile } from 'fs'


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
    const url = answers.string;

    // generate the qr code
    const qrpng = qr.image(`${url}`, { type: 'png' });

    //
    qrpng.pipe(createWriteStream(`qrImage.png`));

    // create the url as message.txt file
    writeFile('message.txt', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error);
    } else {
      console.log(error);
    }
  });

 
