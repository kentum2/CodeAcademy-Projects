class Media {
    constructor(title) {
      this._title=title;
      this._isCheckedOut=false;
      this._ratings =[];
    }
  
      get title() {
      return this._title;
    }
      get isCheckedOut() {
      return this._isCheckedOut;
    }
    set isCheckedOut(newIsCheckedOut) {
      this._isCheckedOut = newIsCheckedOut;
    }
     
      get ratings() {
      return this._ratings;
    }
    toggleCheckOutStatus() {
      this.isCheckedOut = !this._isCheckedOut
    }
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      const lengthOfArray = this.ratings.length;
      return ratingsSum / lengthOfArray;
    }
    addRating(newRating){
      this.ratings.push(newRating);
    }
  }
  class Book extends Media {
   constructor(author, title, pages) {
          super(title);
          this._author=author;
                 this._pages=pages;
        }
        get author() {
          return this._author;
        }	
             get pages() {
          return this._pages;
        }	
  }
  
  class Movie extends Media {
   constructor(title, director, runTime) {
         super(title);
         this._director='director';
              this._runTime=1;
        }
        get director() {
          return this._director;
        }	
           get runTime() {
          return this._runTime;
        }	 
  }
  
  const historyOfEverything = new Book ('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log (historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  historyOfEverything.getAverageRating();
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie ('Jan de Bont', 'Speed', 116);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  speed.getAverageRating();
  console.log(speed.getAverageRating());
      
     /* class CD extends Media {
                 constructor(name, title, isCheckedOut, ratings) {
          super(name, title,isCheckedOut, ratings);
          this._artist=artist;
          this._songs=[];
        }
        get songs() {
          return this._songs
          console.log(songs);
        }
    } */
  