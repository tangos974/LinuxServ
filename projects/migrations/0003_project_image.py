# Generated by Django 4.2.6 on 2023-10-12 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_rename_projects_project'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='image',
            field=models.FileField(blank=True, upload_to='project_images/'),
        ),
    ]
