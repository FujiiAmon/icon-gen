import json

with open("src/api/api_key.json") as f:
    api_key = json.load(f)["API_KEY"]
    print(api_key)
#引数が文字列
def image(a):
    return a


#返り値画像