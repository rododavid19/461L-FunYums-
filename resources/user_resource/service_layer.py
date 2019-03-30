#this file does the actual work and is called from hello.py
import json

class service_layer:
    @staticmethod
    def add_user(data):
        
        try:
            with open("users.json") as f:
                fdata = json.load(f)


            for entries in fdata:
                print(entries)
                if entries["user_name"] == data["user_name"]:
                    return_data = {
                        'status code': '500',
                        'message':'User exists',
                        'data':data}
                    return return_data, 500



            fdata.append(data)


            print(fdata)
            with open("users.json","w") as outfile:
                json.dump(fdata,outfile,sort_keys=True, indent=4, separators=(',', ': '))

            return_data = {
                        'status code': '200',
                        'message':'User added',
                        'data':data}
            return return_data, 200

        except Exception as e:
            print(e)
            return_data = {
                        'status code': '500',
                        'message':'Error',
                        'data':""}
            return return_data, 500
       



    @staticmethod
    def login(data):
        try:
            with open("users.json") as f:
                fdata = json.load(f)


            for entries in fdata:
                if entries["user_name"] == data["user_name"]:
                    return_data = {
                        'status code': '200',
                        'message':'User exists',
                        'data':entries}
                    return return_data, 200

            return_data = {
                        'status code': '404',
                        'message':'User not found',
                        'data':data}
            return return_data, 404

        except Exception as e:
            print(e)
            return_data = {
                        'status code': '500',
                        'message':'Error',
                        'data':""}
            return return_data, 500