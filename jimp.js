const Jimp = require("jimp");

const ORIGINAL_IMAGE ="D:/image/ldplay/1629901963499.png";

const LOGO ="D:/image/ldplay/like.png";

//save image name
const FILENAME = "111.jpg";

const main = async (a) => {

    const [image, logo] = await Promise.all([
        Jimp.read(a),
        Jimp.read(LOGO)
    ]);

    logo.resize(logo.bitmap.width , Jimp.AUTO);

    const X=10;
    const Y=10;

    return image.composite(logo, X, Y, [
        {
            mode: Jimp.BLEND_SCREEN,
            opacitySource: 0.1,
            opacityDest: 1
        }
    ]);
};

main(ORIGINAL_IMAGE).then(image => image.write(FILENAME));