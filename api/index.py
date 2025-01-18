from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from openai import OpenAI
import openai

import json
import os
import requests
from dotenv import load_dotenv
from urllib.parse import urlparse, parse_qs

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

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/generate")
async def create_icon(prompt: Prompt):
    # デプロイ先でAPIキーを環境変数に設定したので、以下のコードは不要
    # with open("api/api_key.json") as f:
    #     api_key = json.load(f)["API_KEY"]
    # os.environ["OPENAI_API_KEY"] = api_key
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
    name = parse_qs(parsed_url.query)["st"]
    save_dir = f"./collection/{name}.png"
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