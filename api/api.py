import json
import urllib

with open("api/api_key.json") as f:
    api_key = json.load(f)["API_KEY"]

from openai import OpenAI
import os
os.environ["OPENAI_API_KEY"] = api_key

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
from PIL import Image, ImageDraw
import io
from urllib.request import urlopen

import time
start = time.perf_counter() #計測開始

import openai
openai.api_key = os.environ["OPENAI_API_KEY"]
client = OpenAI()

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
     print(response.data[0].url)

     file = io.BytesIO(urllib.request.urlopen(response.data[0].url).read()) 
     img = Image.open(file) 
     img = img.resize((300, 300))
     mask = Image.new("L", img.size, 0) 
     draw = ImageDraw.Draw(mask) 
     if selected_shape == '丸': 
        draw.ellipse((0, 0, img.size[0], img.size[1]), fill=255) 
     elif selected_shape == '四角': 
        draw.rectangle((0, 0, img.size[0], img.size[1]), fill=255) 
     img.putalpha(mask)
     img.show()
end = time.perf_counter() #計測終了
print('{:.2f}'.format((end-start)/60)) # 87.97(秒→分に直し、小数点以下の桁数を指定して出力)