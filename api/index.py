from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import openai
from openai import OpenAI

import json
import os

from urllib.parse import urlparse, parse_qs
import requests

import cv2
import numpy as np

app = FastAPI()

origins = [
    "http://localhost:5173",
    # Add other origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Prompt(BaseModel):
    prompt: str

@app.post("/generate")
async def create_icon(prompt: Prompt):
    # デプロイ先でAPIキーを環境変数に設定したので、以下のコードは不要
    with open("api/api_key.json") as f:
        api_key = json.load(f)["API_KEY"]
    os.environ["OPENAI_API_KEY"] = api_key
    openai.api_key = os.environ["OPENAI_API_KEY"]

    client = OpenAI()
    response = client.images.generate(
    model="dall-e-3",
    prompt=prompt.prompt,
    size="1024x1024",
    quality="standard",
    n=1
    )
    response_json = json.loads(response.model_dump_json())
    return response_json["data"][0]["url"]

class URL(BaseModel):
    url: str

@app.post("/download")
async def download_file(URL: URL):
    url = URL.url
    parsed_url = urlparse(url)
    name = parse_qs(parsed_url.query)["st"][0]
    save_dir = f"./public/{name}.png"

    os.makedirs(os.path.dirname(save_dir), exist_ok=True)

    try:
        # URL からデータを取得
        response = requests.get(url, stream=True)
        response.raise_for_status()  # HTTP エラーがあれば例外を発生

        # ファイルを書き込み
        with open(save_dir, "wb") as file:
            for chunk in response.iter_content(chunk_size=8192):  # データを少しずつ書き込む
                file.write(chunk)
        print(f"File downloaded successfully and saved to: {save_dir}")

    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")

class Image(BaseModel):
    image: str

@app.post("/circle")
async def circle(image: Image):
    image_path = image.image
    img = cv2.imread(image_path)
    img = cv2.resize(img,(300,300))
    x = 150
    y = 150
    r = 150
    h,w = img.shape[:2]
    mask = np.zeros((h,w),dtype=np.uint8)
    cv2.circle(mask,center=(x,y),radius=r,color=255,thickness=-1)
    img[mask==0] = [0,0,0]
    cv2.imwrite(f"./collection/{image_path.jpg}_c",img)

@app.post("/gray")
async def gray(image: Image):
    image_path = image.image
    img = cv2.imread(image_path)
    img = cv2.resize(img,(300,300))
    img_gry = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    cv2.imwrite(f"./collection/{image_path}_g",img_gry)

class Image_sat(BaseModel):
    image: str
    sat: float

@app.post("/sat")
async def sat(image: Image_sat):
    image_path = image.image
    img = cv2.imread(image_path)
    sat = image.sat
    img_hsv = cv2.cvtColor(img,cv2.COLOR_BGR2HSV)
    meido = 1
    img_hsv[:,:,(1)] = img_hsv[:,:,(1)]*sat
    img_hsv[:,:,(2)] = img_hsv[:,:,(2)]*meido
    img_bgr = cv2.cvtColor(img_hsv,cv2.COLOR_HSV2BGR)
    cv2.imwrite(f"./collection/{image_path}_s",img_bgr)
