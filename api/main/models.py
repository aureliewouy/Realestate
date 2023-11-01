from django.db import models

# Create your models here.
class Main(models.Model):
    TRANSACTION_CHOICES = [('rental', 'Rental'), ('sale', 'Sale')]
    REALTY_CHOICES = [('office', 'Office'), ('land_plot', 'Land_plot'),
                      ('warehouse', 'Warehouse'), ('retail', 'Retail'), ('coworking', 'Coworking')]
    title =  models.CharField(max_length=50, unique=True)
    address =  models.CharField(max_length=50, unique=True)
    transaction_type =  models.CharField(max_length=6, choices=TRANSACTION_CHOICES)
    realty_type =  models.CharField(max_length=11, choices=REALTY_CHOICES)
    publication_date= models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title