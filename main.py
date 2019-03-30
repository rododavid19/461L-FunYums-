from flask import Flask
from flask_restplus import Api
from setup.application import create_app

app = create_app()


if __name__ == '__main__':#runs app on http://127.0.0.1:5000/v1
    app.run(debug=True)