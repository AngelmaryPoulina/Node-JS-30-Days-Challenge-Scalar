const path  = require('path');
function checkFileExtension(filepath,expectedExtension){ 
    const actualExtension = path.extname(filepath);

    if(actualExtension == expectedExtension) {
        console.log(`File has the expected extension:  ${expectedExtension}`);
    }
    else{
        console.log(`File does not have the expected extension. Expected:  ${expectedExtension}, Actual: ${actualExtension}`);

    }
}


//Test Cases
checkFileExtension('test-files/file.txt','.txt');

checkFileExtension('tezt-files/image.png','.jpg');