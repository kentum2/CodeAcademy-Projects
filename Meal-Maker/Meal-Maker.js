const menu = {
  _courses: {
   appetizers:[],
   mains:[],
   desserts:[],
  },
  get courses () {
    return {
    appetizers: this._courses.appetizers,
    mains: this._courses.mains,
    desserts: this._courses.desserts
    }
      
  },
  get appetizers() {
    return this._appetizers;
  },
  set appetizers(appetizerIn) {
    
  },
   get mains() {
    return this._mains;
  },
  set mains(mainIn) {
    
  },
   get desserts() {
    return this._desserts;
  },
  set desserts(dessertIn) {
    
  },
  
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name:dishName,
      price:dishPrice,
    };
     this._courses[courseName].push(dish);
  
},
  getRandomDishFromCourse (courseName) {
    const dishes =this.courses[courseName];
    const randomIndex =Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
    
  },  
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse ('appetizers');
    const mains = this.getRandomDishFromCourse ('mains');
    const desserts = this.getRandomDishFromCourse ('desserts');
    const totalPrice = appetizers.price + desserts.price + mains.price 

    return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name} The price is $${totalPrice}.`;
  
 }
  };
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('mains', 'Caesar Salad', 5.50);
  menu.addDishToCourse('desserts', 'chocolate ice-cream', 2.25);
  menu.addDishToCourse('mains', 'Pasta al carbonara', 3.55);
  let meal = menu.generateRandomMeal();
  console.log(meal);
  

