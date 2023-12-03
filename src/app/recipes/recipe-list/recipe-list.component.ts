import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'The test Recipe',
      'This is description',
      'https://www.logolynx.com/images/logolynx/55/556570d5a34fc6750b8f27c423084799.jpeg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
