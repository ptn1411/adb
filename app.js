const util = require('util');
const exec = util.promisify(require('child_process').exec);


let list_devices = async function () {
    return new Promise(async (resolve, reject) => {
        const {stdout, stderr} = await exec(`adb devices`);
        const format = stdout.split('\n')
        let json = [];
        for (let i = 0; i < format.length - 1; i++) {
            const list = format[i + 1];
            const list_json = list.split('\t');
            if (list.length > 10) {
                json.push(list_json[0])
            }
        }
        resolve(json);
    })
}

let full_list_devices = async function () {
    return new Promise(async (resolve, reject) => {
        const {stdout, stderr} = await exec(`adb devices -l`);
        const format = stdout.split('\n')
        let json = [];
        for (let i = 0; i < format.length - 1; i++) {
            const list = format[i + 1];
            const list_json = list.trim().split(' ');
            if (list.length > 50) {
                json.push({
                    "host": list_json[0],
                    "product": list_json[11].slice(8),
                    "model": list_json[12].slice(6),
                    "device": list_json[13].slice(7),
                    "transport_id": list_json[14].slice(13)
                })
            }
        }
        resolve(json);
    })
}
let android_version = async function () {
    return new Promise(async (resolve, reject) => {
        const {stdout, stderr} = await exec(`adb shell getprop ro.build.version.release`);
        const format = stdout.split('\n')
        console.log(format[0])
        resolve(format[0]);
    })
}


let screen_cap = async function (id_device, name, from) {
    await exec(`adb -s ${id_device} shell screencap -p /sdcard/${name}.png && adb pull ${id_device} /sdcard/${name}.png ${from}`);
}
let screen_record = async function () {
    await exec(`adb -s ${id_device} shell screenrecord /sdcard/${name}.mp4`);
}

let push = async function (id_device, from) {
    await exec(`adb -s ${id_device} push ${from} /sdcard/`);
}
let click = async function (id_device, x, y) {
    await exec(`adb -s ${id_device} shell input tap ${x} ${y}`);
}
let key_event = async function (id_device, key) {
    await exec(`adb -s ${id_device} shell input keyevent ${key}`);
}
let event_back = async function (id_device) {
    await exec(`adb -s ${id_device} shell input keyevent 4`);
}
let event_home = async function (id_device) {
    await exec(`adb -s ${id_device} shell input keyevent 3`);
}
let event_up = async function (id_device) {
    await exec(`adb -s ${id_device} shell input swipe 600 600 600 1500`);
}
let event_down = async function (id_device) {
    await exec(`adb -s ${id_device} shell input swipe 500 1000 300 300`);
}
let event_left = async function (id_device) {
    await exec(`adb -s ${id_device} shell input swipe 400 400 800 400`);
}
let event_right = async function (id_device) {
    await exec(`adb -s ${id_device} shell input swipe 800 400 400 400`);
}
let event = async function (id_device,x1,y1,x2,y2) {
    await exec(`adb -s ${id_device} shell input swipe ${x1} ${y2} ${x2} ${y2}`);
}
let send_text = async function (id_device, text) {
    function format_text(text) {
        const format = text.split(' ');
        let texts = [];
        for (let i = 0; i < format.length; i++) {
            texts.push(format[i])
        }
        return texts;
    }

    const format = await format_text(text).join('%s');
    await exec(`adb -s ${id_device} shell input text ${format}`);
}
let text = async function (id_device, text) {
    await exec(`adb -s ${id_device} shell input text ${text}`);
}
let view_url = async function (id_device,url){
    await exec(`adb -s ${id_device} shell am start -a android.intent.action.VIEW -d ${url}`)
}
let view_image = async function (id_device){
    await exec(`adb -s ${id_device} shell am start -t image/* -a android.intent.action.VIEW`)
}
module.exports = {
    event_home,event_back,view_image, view_url,key_event, list_devices, full_list_devices, android_version, screen_cap, screen_record, push, click,event_up,event_down,event_left,event_right,send_text,text,event
}
