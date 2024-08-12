from django.http import HttpResponse, JsonResponse


def index(request):  # in web dev we use "index" to mean the root "/". so "/index" is the same as "/"
    return HttpResponse("Hello, world. You're at the homepage.")


def about(request):
    return HttpResponse("About <b>you</b>.")


def helloapi(request):
    return JsonResponse({'foo':'bar'})