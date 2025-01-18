import cv2
import matplotlib.pyplot as plt
img=cv2.imread('api/doge.jpg')
print(type(img))
print(img.shape)
img[:,:,(0,1)]=0
cv2.imwrite('api/doge.jpg',img)
