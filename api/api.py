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

def generate_icon_url(prompt, shape, styles):
    urls = []
    for style in styles:
        styled_prompt = prompt + f" in {style} style"
        response = client.images.generate(
            model="dall-e-3",
            prompt=styled_prompt,
            size="1024x1024",
            quality="standard",
            n=1,
        )
        url = response.data[0].url
        urls.append(url)

        # 画像を取得してリサイズ
        file = io.BytesIO(urllib.request.urlopen(url).read())
        img = Image.open(file)
        img = img.resize((300, 300))
        mask = Image.new("L", img.size, 0)
        draw = ImageDraw.Draw(mask)
        if shape == '丸':
            draw.ellipse((0, 0, img.size[0], img.size[1]), fill=255)
        elif shape == '四角':
            draw.rectangle((0, 0, img.size[0], img.size[1]), fill=255)
        img.putalpha(mask)
        img.show()
    return urls

# 質問リスト
questions = ['動物', '食べ物', '季節', '植物や花', 'スポーツ', '音楽のジャンル', '映画や本のジャンル']
answers = []

# 質問に対してユーザーの答えを収集
for question in questions:
    answer = input(f"好きな{question}は何ですか？")
    answers.append(answer)

combined_prompt = " ".join(answers)

# シェイプリスト
shapes = ['丸', '四角']
print("以下の形から選択してください:")
for i, shape in enumerate(shapes):
    print(f"{i + 1}. {shape}")

shape_choice = int(input("生成したい形の番号を入力してください: ")) - 1
selected_shape = shapes[shape_choice]
print(f"選択されたシェイプ: {selected_shape}")

# スタイルリスト
styles = ['フラットデザイン', '3Dデザイン', '手描き風']

# 関数を呼び出してURLを取得
urls = generate_icon_url(combined_prompt, selected_shape, styles)
for url in urls:
    print(url)
