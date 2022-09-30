const QRCode = require('qrcode')

let data = {
    name:"Earlmond Lee",
    age:27,
    department:"Bakla",
    id:"aisuoiqu3234738jdhf100223"
}

const stringData = JSON.stringify(data);

// Print the QR code to terminal
const strQRCode = (str) => {
    QRCode.toString(str, { type:'terminal' }, function (err, QRcode) {
        if(err) return console.log("error occurred")
    
        // Printing the generated code
        console.log(QRcode)
    })
}
   
// Converting the data into base64
const urlQRCode = (str) => {
    QRCode.toDataURL(str, function (err, code) {
    if(err) return console.log("error occurred")
 
    // Printing the code
    console.log(code)
    })
}

strQRCode(stringData);
urlQRCode(stringData);

