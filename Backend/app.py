from flask import Flask, request, jsonify, redirect, url_for

app = Flask(__name__)

# Initialize an empty list to store user data
users = []

# User Registration API endpoint
@app.route('/register', methods=['POST'])
def register():
    # Get data from the request body
    data = request.json
    
    # Extract username, password, and email from the data
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')
    
    # Check if the username already exists
    for user in users:
        if user['username'] == username:
            return jsonify({'error': 'Username already exists'}), 400
    
    # Create a new user dictionary
    new_user = {
        'username': username,
        'password': password,
        'email': email
    }
    
    # Add the new user to the list of users
    users.append(new_user)
    
    # Return success message
    return jsonify({'message': 'User registered successfully'}), 201

# User Authentication API endpoint
@app.route('/login', methods=['POST'])
def login():
    # Get data from the request body
    data = request.json
    
    # Extract username and password from the data
    username = data.get('username')
    password = data.get('password')
    
    # Check if the entered username and password are correct
    for user in users:
        if user['username'] == username and user['password'] == password:
            # Redirect user to the Product page upon successful login
            return redirect(url_for('product_page'))
    
    # If username or password is incorrect, display error message
    return jsonify({'error': 'Invalid username or password'}), 401

# Product page route
@app.route('/products')
def product_page():
    # Placeholder for the product page logic
    return 'Product page'

if __name__ == '__main__':
    app.run(debug=True)


products = [
    {
        "id": 1,
        "name": "Product 1",
        "description": "Description for Product 1",
        "price": 10.99,
        "image": 'images/product1.png'
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "Description for Product 2",
        "price": 20.99,
        "image": 'images/product2.jpg'
    },
    {
        "id": 3,
        "name": "Product 3",
        "description": "Description for Product 3",
        "price": 10.99,
        "image": 'images/product3.jpg'
    },
    {
        "id": 4,
        "name": "Product 4",
        "description": "Description for Product 4",
        "price": 10.99,
        "image": 'images/product4.jpg'
    },
    {
        "id": 5,
        "name": "Product 5",
        "description": "Description for Product 5",
        "price": 10.99,
        "image": 'images/product5.jpg'
    },
    {
        "id": 6,
        "name": "Product 6",
        "description": "Description for Product 6",
        "price": 10.99,
        "image": 'images/product6.jpg'
    },
    {
        "id": 7,
        "name": "Product 7",
        "description": "Description for Product 7",
        "price": 10.99,
        "image": 'images/product7.jpg'
    },
    {
        "id": 8,
        "name": "Product 8",
        "description": "Description for Product 8",
        "price": 10.99,
        "image": 'images/product8.jpg'
    },
    {
        "id": 9,
        "name": "Product 9",
        "description": "Description for Product 9",
        "price": 10.99,
        "image": 'images/product9.jpg'
    },
    {
        "id": 10,
        "name": "Product 10",
        "description": "Description for Product 10",
        "price": 10.99,
        "image": 'images/product10.jpg'
    }
]
