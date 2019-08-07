import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Apple Pie', 'A pie with apples', 'https://cdn.pixabay.com/photo/2011/03/30/10/28/apple-pie-6007_1280.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}