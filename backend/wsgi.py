from src.app import app 
from dotenv import load_dotenv
import os

load_dotenv()

PORT = os.getenv('PORT')

if __name__ == "__main__":
    app.run(host='localhost', port=(PORT if PORT is not None else 5000), debug=True)