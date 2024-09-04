from flask import Flask
from flask_cors import CORS
from .routes import initalize_routes
from dotenv import load_dotenv
import os
load_dotenv()

app=Flask(__name__)
CORS(app)

initalize_routes(app)

app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')