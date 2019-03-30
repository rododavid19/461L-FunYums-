from flask_restplus import Api
from setup.blueprint import funyums_blueprint_v1
from .hello_resource.hello import ns as hello_ns
from .user_resource.user import ns as user_ns




api = Api(funyums_blueprint_v1, version='1.0',
        title='FunYums API',
        description='description for api of Funyums') #creates api 


#namespace - Group resources/functions  together
#resource - whatever thing is accessed by the URL you supply
def add_all_namespaces():
    #nss = hello_ns+user_ns
    api.add_namespace(hello_ns) #adds all namespaces (operations related to specific task) to api
    api.add_namespace(user_ns)
   

add_all_namespaces()