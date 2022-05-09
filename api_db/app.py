from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/song', methods=['POST'])
def hello_world():
    if request.method == 'POST':
        print(type(request.json))
    return 'Hey, we have Flask in a Docker container!'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')