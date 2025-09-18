# api.py
from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data
users = [
    {"id": 1, "username": "admin"},
    {"id": 2, "username": "guest"}
]

