# Generated by Django 4.2.6 on 2023-11-01 00:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="main",
            name="transaction_type",
            field=models.CharField(
                choices=[("rental", "Rental"), ("sale", "Sale")], max_length=6
            ),
        ),
    ]