from django.shortcuts import render

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
        print(rollno)
        print(password)
        print(ip)
        print(Hid)
        print("+-------------------------------------+")
        print("+-------------------------------------+")

        return render(request, "status.html", {
            "status" : 'good',
            "icon" : 'icon_good.svg',
            "msg" : """Your Attendance is Marked Successfully!"""
        })

        # return render(request, "status.html", {
        #     "status" : 'bad',
        #     "icon" : 'icon_error.svg',
        #     "msg" : """Invalid Attempt for Marking Attendance!"""
        # })

        # return render(request, "status.html", {
        #     "status" : 'bad',
        #     "icon" : 'icon_wifi_error.svg',
        #     "msg" : """Please Connect to Hostel Wifi"""
        # })


        
