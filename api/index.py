from fastapi import FastAPI
from pydantic import BaseModel

from openai import OpenAI
import openai

import json
import os

app = FastAPI()

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