import cv2
import numpy as np

#img=cv2.imread('api/resize_dog.jpg')
#img_a = cv2.resize(img,(300,300))

def circle_img(img):
    x = 150
    y = 150
    r= 150
    h,w=img.shape[:2]
    mask = np.zeros((h,w),dtype=np.uint8)
    cv2.circle(mask,center=(x,y),radius=r,color=255,thickness=-1)#引数：画像、円の中心、半径、色,thickness線の太さ、負の値だと塗りつぶされる
    img[mask==0] = [0,0,0]
    return img

#cv2.imwrite("api/c.jpg",img)

