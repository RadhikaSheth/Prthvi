# Generated by Django 3.2.7 on 2021-10-08 04:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_transaction_accountnumber'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='goal',
            name='id',
        ),
        migrations.AlterField(
            model_name='goal',
            name='donationItem',
            field=models.CharField(max_length=100, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='accountNumber',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.user'),
        ),
    ]
