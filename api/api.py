import json
import os 
import openai
from openai import OpenAI
from PIL import Image, ImageDraw

from urllib.request import urlopen

import time


with open("api/api_key.json") as f:
    api_key = json.load(f)["API_KEY"]

os.environ["OPENAI_API_KEY"] = api_key
openai.api_key = os.environ["OPENAI_API_KEY"]
client = OpenAI()

questions  =  ['動物','食べ物','季節','植物や花','スポーツ','音楽のジャンル','映画や本のジャンル']
answers = []

for question in questions:
    answer = input(f"好きな{question}は何ですか？") 
    answers.append(answer)

shapes = ['丸', '四角']
print("以下の形から選択してください:") 
for i, shape in enumerate(shapes): 
    print(f"{i + 1}. {shape}") 

shape_choice = int(input("生成したい形の番号を入力してください: ")) - 1 
selected_shape = shapes[shape_choice]

combined_prompt = " ".join(answers)
start = time.perf_counter() #計測開始



styles = ['フラットデザイン', '3Dデザイン', '手描き風'] 
for style in styles:
     styled_prompt = combined_prompt + f" in {style} style"
     response = client.images.generate(
        model="dall-e-3",
        prompt=combined_prompt,
        size="1024x1024",
        quality="standard",
        n=1,
    )

print(icon_create("a cat"))
