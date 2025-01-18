import requests

def download_file(url, save_path):
    try:
        # URL からデータを取得
        response = requests.get(url, stream=True)
        response.raise_for_status()  # HTTP エラーがあれば例外を発生
        # ファイルを書き込み
        with open(save_path, "wb") as file:
            for chunk in response.iter_content(chunk_size=8192):  # データを少しずつ書き込む
                file.write(chunk)
        
        print(f"File downloaded successfully and saved to: {save_path}")
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")

# 使用例
url = "https://oaidalleapiprodscus.blob.core.windows.net/private/org-jmuLTnCHURAEXVY1VByta3oE/user-l4chAGXPSMWW0R0qnGlk3lmI/img-1Fm0Od24weHONuQ76QM5wiEr.png?st=2025-01-18T07%3A59%3A05Z&se=2025-01-18T09%3A59%3A05Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-01-18T00%3A24%3A21Z&ske=2025-01-19T00%3A24%3A21Z&sks=b&skv=2024-08-04&sig=75BM7stpoHU5lx8%2BhNKPHYk0OjwXt78UK6rkNnlwGZ0%3D"  # ダウンロードするファイルのURL
save_path = "./sample.png"               # 保存先のファイル名
download_file(url, save_path)
