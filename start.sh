#!/bin/bash
export PORT=8000
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver 0.0.0.0:$PORT
