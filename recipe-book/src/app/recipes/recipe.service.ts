import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Apple Pie', 'A pie with apples', 'https://cdn.pixabay.com/photo/2011/03/30/10/28/apple-pie-6007_1280.jpg'),
    new Recipe('Pear Pie', 'A pie with apples', 'https://cdn.pixabay.com/photo/2011/03/30/10/28/apple-pie-6007_1280.jpg')
  ];

  getRecipe(){
    return this.recipes.slice();
  }

}
