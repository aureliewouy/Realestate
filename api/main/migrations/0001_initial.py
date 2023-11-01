# Generated by Django 4.2.6 on 2023-10-31 23:44

from django.db import migrations, models
import csv
from main.models import Main

# def load_initial_data(apps, schema_editor):
#     # Chemin vers votre fichier CSV
#     csv_file_path = '../data/fakedata.csv'

#     # Lecture du fichier CSV et insertion des données dans la base de données
#     with open(csv_file_path, 'r') as csv_file:
#         data_reader = csv.DictReader(csv_file)
#         for row in data_reader:
#             Main.objects.create(
#                 title=row['title'],
#                 address=row['address'],
#                 transaction_type=row['transaction_type'],
#                 realty_type=row['realty_type'],
#                 publication_date=row['publication_date']
#             )


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Main",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=50, unique=True)),
                ("address", models.CharField(max_length=50, unique=True)),
                ("transaction_type", models.CharField(max_length=50)),
                ("realty_type", models.CharField(max_length=50)),
                ("publication_date", models.DateTimeField(auto_now_add=True)),
            ],
        ),
        # migrations.RunPython(load_initial_data),
    ]