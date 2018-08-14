# Generated by Django 2.1 on 2018-08-14 08:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(max_length=255)),
                ('pub_date', models.DateTimeField(verbose_name='date published')),
                ('start_date', models.DateTimeField(verbose_name='starting date')),
                ('end_date', models.DateTimeField(verbose_name='ending date')),
                ('head', models.CharField(max_length=255)),
                ('brief_summary', models.CharField(max_length=1000)),
                ('content', models.CharField(max_length=1000)),
                ('app_deadline', models.DateTimeField(verbose_name='application deadline')),
                ('num_places', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('skill_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Type',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_name', models.CharField(max_length=255)),
            ],
        ),
    ]
