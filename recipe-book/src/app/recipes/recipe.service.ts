import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shipping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Apple Pie',
    'A pie with apples',
    'https://cdn.pixabay.com/photo/2011/03/30/10/28/apple-pie-6007_1280.jpg',
    [
      new Ingredient('Pie Crust', 3),
      new Ingredient('Brown Sugar Cups', 2)
    ]),
    new Recipe('Pear Pie',
    'A pie with apples',
    'http://images.media-allrecipes.com/userphotos/960x960/4573631.jpg',
    [
      new Ingredient('Pears', 5 ),
      new Ingredient('Vanilla Extract Teaspoons', 1 )
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService
  }

}
