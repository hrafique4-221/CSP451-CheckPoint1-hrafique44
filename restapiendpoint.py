@app.route("/api/users", methods=["GET"])
def get_users():
    """Return a list of all users"""
    return jsonify(users)

@app.route("/api/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    """Return a single user by ID"""
    user = next((u for u in users if u["id"] == user_id), None)
    if user:
        return jsonify(user)
    return jsonify({"error": "User not found"}), 404

