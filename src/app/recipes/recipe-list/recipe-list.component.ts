import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
/**
 * This class consume recipes.model.ts model file
 * to create a list of Recipes
 */
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe('Poulet Roti', 'Poulet roti, spaghetti, oignon, huille olive', 'https://cdn.pixabay.com/photo/2016/11/08/10/39/chicken-1807883_960_720.jpg'),
    new Recipe('Boeuf', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sodales arcu.', 'https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_960_720.jpg'),
    new Recipe('Sushi saumon', 'Proin fermentum eget est vel facilisis. Nunc tempus posuere', 'https://cdn.pixabay.com/photo/2017/10/16/09/00/sushi-2856545_960_720.jpg'),
    new Recipe('Thon cuit', 'Donec accumsan non diam id imperdiet. ', 'https://cdn.pixabay.com/photo/2019/10/27/04/18/sushi-4580656_960_720.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
