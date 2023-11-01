# Generated by Django 4.2.6 on 2023-11-01 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0003_alter_main_realty_type"),
    ]

    operations = [
        migrations.AlterField(
            model_name="main",
            name="realty_type",
            field=models.CharField(
                choices=[
                    ("office", "Office"),
                    ("land_plot", "Land_plot"),
                    ("warehouse", "Warehouse"),
                    ("retail", "Retail"),
                    ("coworking", "Coworking"),
                ],
                max_length=11,
            ),
        ),
    ]
