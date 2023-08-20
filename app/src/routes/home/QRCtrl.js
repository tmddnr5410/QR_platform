const QRCode= require('qrcode');

class QRCtrl {
    static showQRmaker(req, res) {
        res.render("home/QRmaker");
    }

    static madeQR(req,res){
        const text = `http://localhost:3000/show/${req.params.cpnID}`;
        console.log(text);
        QRCode.toDataURL(text,(err,url)=>{
            const data = url.replace(/.*,/,"");
            const img = new Buffer.from(data,"base64");

            res.writeHead(200,{
                "Content-Type":"image/png",
                "Content-Length":img.length
            });
            res.end(img);
        });
    }

}

module.exports=QRCtrl;