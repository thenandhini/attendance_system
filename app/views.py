from django.shortcuts import render
from . import utils

# Create your views here.

def index(request):
    if request.method == "GET":
        return render(request, "index.html")
    
    if request.method == "POST":
        rollno = request.POST['rollno']
        password = request.POST['password']
        ip = request.POST['ip']
        Hid = request.POST['Hid']

        print("+-------------------------------------+")
        print("+-------------------------------------+")
        print("Roll No          :"+str(rollno))
        print("Password         :"+str(password))
        print("IP               :"+str(ip))
        print("Hardware ID      :"+str(Hid))
        print("+-------------------------------------+")
        print("+-------------------------------------+")

        if utils.ip_match(ip):

            if not utils.proxy(rollno, Hid):
                
                if utils.mark_attendance(rollno, password):
                
                    return render(request, "status.html", {
                        "status" : 'good',
                        "icon" : 'icon_good.svg',
                        "msg" : """Your Attendance is Marked Successfully!"""
                    })
            
        else:

            return render(request, "status.html", {
                "status" : 'bad',
                "icon" : 'icon_wifi_error.svg',
                "msg" : """Please Connect to Hostel Wifi"""
            })
        


        return render(request, "status.html", {
                "status" : 'bad',
                "icon" : 'icon_error.svg',
                "msg" : """Invalid Attempt for Marking Attendance!"""
        })


        
