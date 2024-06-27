body {
    font-family: Arial, sans-serif;
    background: url('https://i.imgur.com/6JYxW5F.jpg') no-repeat center center fixed; 
    background-size: cover;
    margin: 0;
    padding: 0;
}

.container {
    width: 500px;
    margin: 50px auto;
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border-radius: 8px;
}

h1 {
    text-align: center;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
}

h1 .material-icons {
    margin-right: 10px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    color: #555;
}

label .material-icons {
    margin-right: 10px;
}

input, select {
    width: calc(100% - 22px);
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    width: 100%;
    padding: 10px;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

button .material-icons {
    margin-right: 10px;
}

button:hover {
    background: #218838;
}

#results {
    margin-top: 20px;
}

#results p {
    font-size: 18px;
    color: #333;
}
