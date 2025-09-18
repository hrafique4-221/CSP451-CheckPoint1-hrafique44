
#Hamzah 

# auth.py
from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

# Sample in-memory user database
users = {"admin": "password123"}

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        # Validate credentials
        if username in users and users[username] == password:
            return "Login successful!"
        else:
            return "Invalid credentials. Try again."
    return render_template("login.html")

if __name__ == "__main__":
    app.run(debug=True)
