const menu = {
    _meal : '',
    _price : 0,
   set mealToCheck(meal) {
       if(typeof this._meal === 'string') {
         return this._meal = meal;
         //console.log(this._meal);
       }
    },
    set priceToCheck(priceToCheck) {
      if(typeof this._price === 'number') {
        return this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if(this._meal && this._price){
        console.log(`今天的特价是${this._price}元的${this._meal}。`);
      }else{
        console.log('Meal or price was not set correctly!');
      }
    }
  };
  menu.mealToCheck = 'egg';
  menu.priceToCheck = 0.5;
  console.log(menu);
  menu.todaysSpecial;