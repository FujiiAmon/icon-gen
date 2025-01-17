import json
import urllib

with open("src/api/api_key.json") as f:
    api_key = json.load(f)["API_KEY"]

from openai import OpenAI
import os
os.environ["OPENAI_API_KEY"] = api_key

string = input("文字列を入力してください:")
print("文字列", string, "が入力されました。")

from PIL import Image
import io
from urllib.request import urlopen


import openai
openai.api_key = os.environ["OPENAI_API_KEY"]
client = OpenAI()
response = client.images.generate(
    model="dall-e-3",
    prompt=string,
    size="1024x1024",
    quality="standard",
    
    n=1,
)
print(response.data[0].url)

file =io.BytesIO(urllib.request.urlopen(response.data[0].url).read())
img = Image.open(file)
img.show()