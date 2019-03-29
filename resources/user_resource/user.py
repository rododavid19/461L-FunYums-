from flask import request, abort
from flask_restplus import Resource, Namespace
from .service_layer import service_layer
from .user_schema import user_schema,login_schema




#namespace - Group resources together
#resource - whatever thing is accessed by the URL you supply ex. someones account data
#JSON - how resource is represented
ns = Namespace('user', description='Operations related to user') #add hello namespace, which is all operations related to hello activity

ns.models[user_schema.name] = user_schema
ns.models[login_schema.name] = login_schema

@ns.route('/register')
class User(Resource):
    @ns.expect(user_schema)
    def post(self): # http get method, returns hello world
        print("get method from class HelloWorld")

        data = request.json
        print(data)
        return service_layer.add_user(data)



@ns.route('/login')
class User(Resource):
    @ns.expect(login_schema)
    def post(self): # http get method, returns hello world
        print("get method from class HelloWorld")
        
        data = request.json
        print(data)
        return service_layer.login(data)
        
        