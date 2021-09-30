const adb = require('./app');
const Jimp = require('jimp');

function sleep(n) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}

async function login_facebook(id_device,username,password,otp) {
    await adb.click(id_device, 675, 365);
    sleep(500);
    await adb.click(id_device, 300, 875);
    sleep(500);
    await adb.text(id_device, username)
    await adb.click(id_device, 300, 1065);
    sleep(500);
    await adb.text(id_device, password)
    sleep(500);
    //dang nhap
    await adb.click(id_device, 545, 1225);
    sleep(500);
    await adb.click(id_device, 890, 1165);
    sleep(500);
    await adb.click(id_device, 225, 995);
    sleep(500);
    await adb.text(id_device, otp)
    await adb.click(id_device, 515, 1179);
}

async function ban_tin(id_device) {
    await adb.event_down(id_device);
    sleep(500);
    await adb.click(id_device,90,140);
    sleep(5000);
    await adb.event_up(id_device);
    sleep(1000);
    await adb.event_down(id_device);
    sleep(1000);
    await adb.event_down(id_device);
    sleep(200);
    await adb.event_down(id_device);
    sleep(500);
    await adb.event_down(id_device);
    sleep(2000);
    await adb.event_down(id_device);
    sleep(500);
    await adb.event_down(id_device);
}

async function nhom(id_device) {
    await adb.event_down(id_device);
    sleep(500);
    await adb.click(id_device,270,140);
    sleep(1000);
    await adb.event_up(id_device);
    sleep(2000);
    await adb.event_down(id_device);
    sleep(500);
    await adb.event_down(id_device);
    sleep(500);
    await adb.event_down(id_device);
    sleep(500);
    await adb.event_down(id_device);
    sleep(1000);
    await adb.event_down(id_device);
    sleep(500);
    await adb.event_down(id_device);
}

async function watch(id_device) {
    await adb.event_down(id_device);
    sleep(500);
    await adb.click(id_device,450,140);
    sleep(3000);
    await adb.event_down(id_device);
    sleep(1000);
    await adb.event_down(id_device);
    sleep(500);
    await adb.event_down(id_device);
    sleep(500);
    await adb.event_down(id_device);
    sleep(1000);
    await adb.event_down(id_device);
    sleep(500);
    await adb.event_down(id_device);
}

async function thong_bao(id_device) {
    await adb.event_down(id_device);
    sleep(500);
    await adb.click(id_device,810,140);
    sleep(1000);
    await adb.click(id_device,540,630);
    sleep(1000);
    await adb.event_back(id_device);
}

//adb.screen_cap(id_device,date,from)

async function run_app(){
    const device =  await adb.list_devices();
    const id_device = device[0];
    const from = 'D:/image/ldplay/';
    const date = Date.now();
    const username = 'ptn1411';
    const password = 'zvw180ptn1411@';
    const otp = '11111';

    await adb.click(id_device, 675, 365);

    await  ban_tin(id_device);
    sleep(1000);
    await watch(id_device);
    sleep(1000);
    await nhom(id_device);
}
Jimp.read("D:/image/ldplay/1629901963499.png", function (err, image) {
    image.getPixelColor(x, y); // returns the colour of that pixel e.g. 0xFFFFFFFF
});
