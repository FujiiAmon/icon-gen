import cv2
import numpy as np

# def sub_color(src, K):
#     # 次元数を1落とす
#     Z = src.reshape((-1,3))

#     # float32型に変換
#     Z = np.float32(Z)

#     # 基準の定義
#     criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 10, 1.0)

#     # K-means法で減色
#     ret, label, center = cv2.kmeans(Z, K, None, criteria, 10, cv2.KMEANS_RANDOM_CENTERS)

#     # UINT8に変換
#     center = np.uint8(center)

#     res = center[label.flatten()]

#     # 配列の次元数と入力画像と同じに戻す
#     return res.reshape((src.shape))

def mosaic(img,alpha):
    h,w,ch = img.shape

    img = cv2.resize(img,(int(w*alpha),int(h*alpha)))
    img = cv2.resize(img,(w,h),interpolation=cv2.INTER_NEAREST)

    return img

def pixel_art(img,alpha=2,K=4):
    img = (mosaic(img,alpha))

    return img
# sub_color(img,K)

img = cv2.imread("api/c.jpg")

dst = pixel_art(img,0.5,4)

cv2.imwrite("api/temp.jpg",dst)