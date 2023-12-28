import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {
  fruits = [
    { name: 'Apple', emoji: '🍎' },
    { name: 'Banana', emoji: '🍌' },
    { name: 'Orange', emoji: '🍊' },
    { name: 'Grapes', emoji: '🍇' },
    { name: 'Watermelon', emoji: '🍉' },
    { name: 'Strawberry', emoji: '🍓' },
    { name: 'Pineapple', emoji: '🍍' },
    { name: 'Mango', emoji: '🥭' },
    { name: 'Cherry', emoji: '🍒' },
    { name: 'Kiwi', emoji: '🥝' },
    { name: 'Peach', emoji: '🍑' },
    { name: 'Pear', emoji: '🍐' },
    { name: 'Lemon', emoji: '🍋' },
    { name: 'Avocado', emoji: '🥑' },
    { name: 'Coconut', emoji: '🥥' },
    { name: 'Pomegranate', emoji: '🥭' },
    { name: 'Dragon Fruit', emoji: '🐉' },
    { name: 'Guava', emoji: '🍈' },
    { name: 'Raspberry', emoji: '🍇' },
    { name: 'Apricot', emoji: '🍑' },
    { name: 'Cantaloupe', emoji: '🍈' },
    { name: 'Passion Fruit', emoji: '🍈' },
    { name: 'Cranberry', emoji: '🍒' },
    { name: 'Kiwi Fruit', emoji: '🥝' },
    { name: 'Lime', emoji: '🍋' },
    { name: 'Papaya', emoji: '🥭' },
    { name: 'Tomato', emoji: '🍅' }
  ];
}
