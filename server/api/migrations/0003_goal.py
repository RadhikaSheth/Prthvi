# Generated by Django 3.2.7 on 2021-10-07 11:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_transaction_valuedate'),
    ]

    operations = [
        migrations.CreateModel(
            name='Goal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('causeType', models.CharField(max_length=100)),
                ('donationItem', models.CharField(max_length=100)),
                ('itemQuantity', models.CharField(max_length=10)),
                ('itemPrice', models.CharField(max_length=10)),
            ],
        ),
    ]
