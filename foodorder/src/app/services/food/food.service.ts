import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }
  getAllFoodByTag(tag:string) :Foods[]{
    return tag == "All" ? 
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
    
    
     }

  getAllTag():Tag[]{
    return[
      {name: 'All', count:16},
      {name: 'FastFood', count:9},
      {name: 'Burger', count:1},
      {name: 'Lunch', count:10},
      {name: 'Steamed', count:1},
      {name: 'Fry', count:1},
      {name: 'Sweet', count:3},

    ]
    
  }
  getAll():Foods[]{
    return [
      { 
          id: 1,
          name: 'HamBurger',
          cookTime: '10-20',
          price: 10,
          favorite: false,
          origin: ['Germany'], 
          star: 4.5,
          imageUrl: '/assets/burger.jpeg', 
          tags: ['FastFood', 'Burger', 'Lunch'],
      },
      {
          id: 2,
          name: 'Manchurian', 
          cookTime: '20-30',
          price:20,
          favorite: true,
          origin: ['India', 'China','Japan'], 
          star: 4.7,
          imageUrl: '/assets/man.jpeg', 
          tags: ['FastFood', 'Lunch'],

      },    
      {
        id: 3,
        name: 'Noodles', 
        cookTime: '10-20',
        price:30,
        favorite: false,
        origin: ['India', 'China','Japan'], 
        star: 4.7,
        imageUrl: '/assets/noodles.jpeg', 
        tags: ['FastFood', 'Lunch'],

      }, 
      {
        id: 4,
        name: 'Pasta', 
        cookTime: '20-30',
        price:40,
        favorite: true,
        origin: ['Italian', 'China','Japan'], 
        star: 4.7,
        imageUrl: '/assets/pasta.jpeg', 
        tags: ['FastFood', 'Lunch'],

      }, 
      {
        id: 5,
        name: 'Pizza', 
        cookTime: '10-20',
        price:50,
        favorite: true,
        origin: ['Italian'], 
        star: 4.7,
        imageUrl: '/assets/pizza.jpeg', 
        tags: ['FastFood', 'Lunch'],

      },  
      {
        id: 6,
        name: 'Idli Sambhar', 
        cookTime: '20-30',
        price:30,
        favorite: true,
        origin: ['India'], 
        star: 4.7,
        imageUrl: '/assets/idli.jpeg', 
        tags: ['FastFood', 'Steamed'],

      },  
      {
        id: 7,
        name: 'Potato Cheese Ball', 
        cookTime: '10-20',
        price:50,
        favorite: true,
        origin: ['Belgium', 'France'], 
        star: 4.7,
        imageUrl: '/assets/ball.jpeg', 
        tags: ['FastFood', 'Fry'],

      }, 
      {
        id: 8,
        name: 'Panner Tikka', 
        cookTime: '30-40',
        price:50,
        favorite: true,
        origin: ['Indian'], 
        star: 4.7,
        imageUrl: '/assets/tikka.jpeg', 
        tags: ['FastFood', 'Lunch'],

      },        
      {
        id: 9,
        name: 'Panner Tikka', 
        cookTime: '30-40',
        price:50,
        favorite: true,
        origin: ['Indian'], 
        star: 4.7,
        imageUrl: '/assets/tikka.jpeg', 
        tags: ['FastFood', 'Lunch'],

      },    
      {
        id: 10,
        name: 'Sandwich', 
        cookTime: '10-15',
        price:20,
        favorite: true,
        origin: ['Indian'], 
        star: 4.7,
        imageUrl: '/assets/sandwich.jpg', 
        tags: ['FastFood', 'Lunch'],

      },   
      {
        id: 11,
        name: 'Cup Cake', 
        cookTime: '10',
        price:20,
        favorite: true,
        origin: ['Indian'], 
        star: 4.7,
        imageUrl: '/assets/cupcake.jpg', 
        tags: ['Sweet'],

      },
      {
        id: 12,
        name: 'Dosa', 
        cookTime: '15-20',
        price:30,
        favorite: true,
        origin: ['SouthIndian'], 
        star: 4.7,
        imageUrl: '/assets/dosa.jpg', 
        tags: ['Lunch'],

      }, 
      {
        id: 13,
        name: 'Chocolate Shake', 
        cookTime: '20',
        price:150,
        favorite: true,
        origin: ['Indian'], 
        star: 4.7,
        imageUrl: '/assets/shake.jpg', 
        tags: ['Sweet'],

      }, 
      {
        id: 14,
        name: 'Pancake', 
        cookTime: '20-30',
        price:100,
        favorite: true,
        origin: ['Indian'], 
        star: 4.7,
        imageUrl: '/assets/pancake.jpg', 
        tags: ['Sweet'],

      }, 
      {
        id: 15,
        name: 'Wrap', 
        cookTime: '20-25',
        price:40,
        favorite: true,
        origin: ['Indian'], 
        star: 4.7,
        imageUrl: '/assets/wrap.jpg', 
        tags: ['Lunch'],

      }, 
      {
        id: 16,
        name: 'Uttapam', 
        cookTime: '20-25',
        price:35,
        favorite: true,
        origin: ['Indian'], 
        star: 4.7,
        imageUrl: '/assets/uttapam.jpg', 
        tags: ['Lunch'],

      }, 

      
     

    ]
  }
}
