FROM python:3.9.0

ADD requirements2.txt /api/requirements2.txt

WORKDIR /api

RUN pip install -r requirements2.txt
ENV PYTHONPATH /api