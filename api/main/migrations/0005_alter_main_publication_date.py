# Generated by Django 4.2.6 on 2023-11-06 03:01

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0004_alter_main_realty_type"),
    ]

    operations = [
        migrations.AlterField(
            model_name="main",
            name="publication_date",
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
        ),
    ]
