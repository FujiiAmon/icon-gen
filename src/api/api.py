from openai import OpenAI
import json
import os 
import openai
import base64
#a
with open("src/api/api_key.json") as f:
    api_key = json.load(f)["API_KEY"]

# APIキーを設定
os.environ["OPENAI_API_KEY"] = api_key
openai.api_key = os.environ["OPENAI_API_KEY"]


#引数が文字列
def icon_create(youser_prompt):
    client = OpenAI()
    response = client.images.generate(
    model="dall-e-3",
    prompt=youser_prompt,
    size="1024x1024",
    quality="standard",
    n=1
    )
    image_bytes = base64.b64decode(response.data[0].b64_json)#返り値をどうにかしたい
    return image_bytes

print(icon_create("りんご"))