from urllib import request
from django.shortcuts import render
from basicapp import forms
# Create your views here.

def index(request):
    return render(request, 'basicapp/index.html')

def form_name_view(request):
    form = forms.formName()

    if request.method == 'POST':
        form = forms.formName(request.POST)

        if form.is_valid():
            print("VALIDATIONSUCCESS")
            print("NAME: " + form.cleaned_data['name'])

    return render(request, 'basicapp/form_page.html', {'form': form})