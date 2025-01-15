from fastapi import FastAPI
from pydantic import BaseModel
import os
from dotenv import load_dotenv

class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

# @app.post("/items/")
# async def create_item(item: Item):
#     return

load_dotenv()
api_key = os.getenv("VITE_API_KEY")
print(api_key)