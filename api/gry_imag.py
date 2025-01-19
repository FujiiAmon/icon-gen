import cv2
import numpy as np

img=cv2.imread('api/doge.jpg')

def gry_scale(img):#グレースケール化
    img_gry = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    return img_gry
    #cv2.imwrite("api/c.jpg",img_gry)


def scale_change(img,scale):#リサイズ
    img = cv2.resize(img,(scale,scale))
    return img


