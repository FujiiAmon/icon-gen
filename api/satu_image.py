#HSV空間H(Hue:色相)、S(Saturation:彩度)、V(Value:明度)OpenCVではH[0,179], S[0,255]，V[0,255]の範囲の値をとる
import cv2

def saturation_change(img,temp):
    
    img_hsv = cv2.cvtColor(img,cv2.COLOR_BGR2HSV)
    saido =temp
    meido = 1
    img_hsv[:,:,(1)] = img_hsv[:,:,(1)]*saido
    img_hsv[:,:,(2)] = img_hsv[:,:,(2)]*meido
    img_bgr = cv2.cvtColor(img_hsv,cv2.COLOR_HSV2BGR)
    return img_bgr

# img = cv2.imread("api/temp.jpg")

# img_can = saturation_change(img,0.6)

#cv2.imwrite("api/test.jpg",img_can)