import numpy as np
import cv2
from cv2 import Stitcher

if __name__ == "__main__":
    img1 = cv2.imread('1.jpg')
    img2 = cv2.imread('2.jpg')
    stitcher = cv2.Stitcher_create()
    (_result, pano) = stitcher.stitch((img1, img2))
    cv2.imshow('Panorama Maker',pano)
    cv2.waitKey(0)
