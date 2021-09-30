const PNG = require("pngjs").PNG
    , gm = require("gm")
;

let img = gm("./image/1629879334229.png");

// Get the PNG buffer
img.toBuffer("PNG", (err, buff) => {


    // Get the image size
    img.size((err, size) => {


        // Parse the PNG buffer
        let str = new PNG();
        str.end(buff);

        // After it's parsed...
        str.on("parsed", buffer => {
            // Get some pixel from the image
            let x = 27
                , y = 9
            ;

            let idx = (size.width * y + x) << 2
                , rgb = {
                    r: buffer[idx]
                    , g: buffer[idx + 1]
                    , b: buffer[idx + 2]
                }
            ;
        });
        str.on("error");
    });
});