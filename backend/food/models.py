from django.db import models

# Create your models here.
class Category(models.Model):
    id = models.AutoField(primary_key=True)
    label = models.CharField("label", max_length=200)
    description = models.CharField("description", max_length=400)

    class Meta:
        verbose_name = ("Category")
        verbose_name_plural = ("Categories")

    def __str__(self):
        return self.label

    def get_absolute_url(self):
        return reverse("Category_detail", kwargs={"pk": self.pk})
    



class Food_Item(models.Model):
    id = models.AutoField(("id"), primary_key=True)
    categoryId = models.ForeignKey("food.Category", verbose_name=("category Id"), on_delete=models.CASCADE)
    label = models.CharField(("label"), max_length=100)
    description = models.CharField(("description"), max_length=200)
    imageUrl = models.CharField(("Image Url"), max_length=200)
    price = models.CharField(("price"), max_length=50)

    

    class Meta:
        verbose_name = ("Food Item")
        verbose_name_plural = ("Food Items")

    def __str__(self):
        return self.label

    def get_absolute_url(self):
        return reverse("Food_Item_detail", kwargs={"pk": self.pk})


