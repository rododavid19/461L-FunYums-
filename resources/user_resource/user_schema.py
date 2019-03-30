from flask_restplus import fields, Model
user_schema = Model('User Schema', {
    'user_name': fields.String(),
    'full_name': fields.String(),
    'email':  fields.String(),
    'password': fields.String(),
    })

login_schema = Model('Login Schema', {
    'user_name': fields.String(),
    'password': fields.String(),
    })