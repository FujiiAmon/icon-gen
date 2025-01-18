import cv2
import numpy as np

img=cv2.imread('api/doge.jpg')
def gry_scale(img):
    img_gry = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    return img_gry
    #cv2.imwrite("api/c.jpg",img_gry)

