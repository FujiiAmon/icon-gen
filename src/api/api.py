import json

with open("src/api/api_key.json") as f:
    api_key = json.load(f)["API_KEY"]

from openai import OpenAI
import os
os.environ["OPENAI_API_KEY"] = api_key
# APIキーを設定
import openai
openai.api_key = os.environ["OPENAI_API_KEY"]
client = OpenAI()
response = client.images.generate(
    model="dall-e-3",
    prompt="a white siamese cat",
    size="1024x1024",
    quality="standard",
    
    n=1,
)
print(response.data[0].url)