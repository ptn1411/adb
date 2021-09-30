import cv2 as cv
import numpy as np

# import subprocess
# import datetime


# id_device='emulator-5554'
# datenow = datetime.date.today()
#
# def click(x,y):
#     adb_command = 'adb -s %s shell input tap %s %s'%(id_device,x,y)
#     subprocess.call(adb_command)
#
# def send_text(text):
#     adb_command = 'adb -s %s shell input text %s'%(id_device,text)
#     subprocess.call(adb_command)
#
# def screenshot_capture(time):
#     adb_command = 'adb -s %s shell screencap -p /sdcard/%s.png'%(id_device,time)
#     subprocess.call(adb_command)
#     print('screenshot %s' % time)

haystack_img = cv.imread('D:/image/ldplay/1629901963499.png',cv.IMREAD_UNCHANGED)
needle_img = cv.imread('D:/image/ldplay/like.png',cv.IMREAD_UNCHANGED)

result = cv.matchTemplate(haystack_img,needle_img,cv.TM_CCOEFF_NORMED)

min_val,max_val ,min_loc,max_loc = cv.minMaxLoc(result)

print('top: %s' % srt(max_loc))
print('top: %s' % max_val)