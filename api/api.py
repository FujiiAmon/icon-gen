import json
import urllib
from openai import OpenAI
import os
from PIL import Image, ImageDraw
import io
import time
from urllib.request import urlopen
import openai
with open("api/api_key.json") as f:
    api_key = json.load(f)["API_KEY"]


os.environ["OPENAI_API_KEY"] = api_key

def generate_icon_url(answers, shape, styles): 
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


    openai.api_key = os.environ["OPENAI_API_KEY"]
    client = OpenAI()
    urls = []  # 画像URLを格納するリスト

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
        url = response.data[0].url
        urls.append(url)  
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
    print('{:.2f}'.format((end-start)/60)) 
    return urls

def edit_generated_image(image_url, prompt_for_editing="edit", mask_shape="circle"):
    # 画像の取得
    file = io.BytesIO(urllib.request.urlopen(image_url).read())
    img = Image.open(file)

    # マスク画像
    mask = Image.new("L", img.size, 255)
    draw = ImageDraw.Draw(mask)

    if mask_shape == 'circle':
        draw.ellipse((0, 0, img.size[0], img.size[1]), fill=0)
    elif mask_shape == 'square':
        draw.rectangle((0, 0, img.size[0], img.size[1]), fill=0)

    img.save("temp_image.png")
    mask.save("temp_mask.png")

    client = OpenAI()

    with open("temp_image.png", "rb") as img_file, open("temp_mask.png", "rb") as mask_file:
        response = client.images.edit(
            model="dall-e-2",
            image=img_file,
            mask=mask_file,
            prompt=prompt_for_editing,
            n=1
        )

    edited_image_url = response.data[0].url
    return edited_image_url

if __name__ == '__main__':
    #tmp_url = generate_icon_url("prompt",shape="丸",styles=[])
    tmp_url ="https://oaidalleapiprodscus.blob.core.windows.net/private/org-jmuLTnCHURAEXVY1VByta3oE/user-l4chAGXPSMWW0R0qnGlk3lmI/img-EoUFd7T6bI0AmtWgiEiNSDSg.png?st=2025-01-19T02%3A20%3A33Z&se=2025-01-19T04%3A20%3A33Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-01-18T12%3A28%3A52Z&ske=2025-01-19T12%3A28%3A52Z&sks=b&skv=2024-08-04&sig=A2wj93%2BvYS2ziE/yrFELLiff%2Bza4sf9wLweSw/98wJI%3D  "
    edited_url = edit_generated_image(tmp_url,"edit",mask_shape="circle")
    print(edited_url)